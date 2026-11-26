// Your AI Therapist's Diagnosis — entry program.
// Writes exactly one funny diagnosis line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Diagnosis: acute tab-hoarding disorder — you have 47 tabs open and still insist you're 'almost done'.";

// The diagnosis line: calm clinical voice, the twist lands at the end.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  // Explicit utf8 so the gate reads the file exactly as written.
  writeFileSync("/output/entry.txt", entry, { encoding: "utf8" });
  console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
}

writeEntry();
