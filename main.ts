// One Line, One Chill — writes a single sentence of horror to /output/entry.txt.
// Deterministic: the same line on every run. Node built-ins only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The nursery camera saved a clip of the empty crib rocking, and the timestamp is eleven minutes from now.";

// The sealed gate requires one sentence, 1–200 characters, valid UTF-8.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() !== LINE) {
  throw new Error("entry line violates the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
