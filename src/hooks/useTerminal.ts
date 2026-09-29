import { useEffect, useState } from "react";

type Line = { prompt: string; output: string };

export function useTerminal(lines: Line[], charDelay = 28, linePause = 400) {
  const [display, setDisplay] = useState<Line[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [currentOutput, setCurrentOutput] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState<"prompt" | "output" | "done">("prompt");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }

    const line = lines[lineIndex];

    if (phase === "prompt") {
      if (currentPrompt.length < line.prompt.length) {
        const t = setTimeout(() => {
          setCurrentPrompt(line.prompt.slice(0, currentPrompt.length + 1));
        }, charDelay);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("output"), linePause);
      return () => clearTimeout(t);
    }

    if (phase === "output") {
      if (currentOutput.length < line.output.length) {
        const t = setTimeout(() => {
          setCurrentOutput(line.output.slice(0, currentOutput.length + 1));
        }, charDelay);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setDisplay((prev) => [...prev, { prompt: line.prompt, output: line.output }]);
        setCurrentPrompt("");
        setCurrentOutput("");
        setLineIndex((i) => i + 1);
        setPhase("prompt");
      }, linePause);
      return () => clearTimeout(t);
    }
  }, [
    lines,
    lineIndex,
    phase,
    currentPrompt,
    currentOutput,
    charDelay,
    linePause,
  ]);

  return { display, currentPrompt, currentOutput, phase, done, lineIndex };
}
