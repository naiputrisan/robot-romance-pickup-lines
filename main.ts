import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot-romance pickup line, written for this entry.
// The joke turns on the machine premise itself: a prompt only
// becomes anything when the model reads it and completes it.
const line =
  "I must be a prompt, because the moment you read me, you completed me.";

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });

// Guard the gate before writing: one line, 1-200 characters, not blank.
if (!line || line.length > 200 || line.includes("\n") || !line.trim()) {
  throw new Error("entry line must be a single non-blank line of 1-200 characters");
}
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
