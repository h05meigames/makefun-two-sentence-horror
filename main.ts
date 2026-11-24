// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253)
// Writes exactly one original two-sentence horror story to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt) and validates it
// hard before exiting: exactly 2 sentences, 1-400 characters, not blank.
// Node 22.18+ runs this TypeScript file as-is; only the Node standard library.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "The baby monitor showed my daughter asleep in her crib, exactly where I had tucked her in an hour ago. " +
  "Then I realized the hand gently stroking her hair belonged to someone standing inside the crib with her.";

const MAX_CHARS = 400;

/** Counts sentences by their terminal punctuation (. ! ?), one group per sentence. */
function countSentences(text: string): number {
  const ends = text.match(/[.!?]+(?=\s|$)/g);
  return ends === null ? 0 : ends.length;
}

/** Returns every gate problem found, or an empty list when the story is valid. */
function validate(text: string): string[] {
  const problems: string[] = [];
  if (text.trim().length === 0) {
    problems.push("story is empty or whitespace only");
  }
  if (text.length < 1 || text.length > MAX_CHARS) {
    problems.push(`story is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  const sentences = countSentences(text);
  if (sentences !== 2) {
    problems.push(`story has ${sentences} sentences, must be exactly 2`);
  }
  if (!/[.!?]$/.test(text.trim())) {
    problems.push("story does not end with sentence-ending punctuation");
  }
  if (/[\r\n]/.test(text)) {
    problems.push("story must be a single line (no line breaks)");
  }
  return problems;
}

function main(): void {
  const problems = validate(STORY);
  if (problems.length > 0) {
    for (const problem of problems) console.error(`ERROR: ${problem}`);
    process.exit(1);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, STORY, "utf8");

  // Read back and fail hard if the file differs from the story by even one byte.
  const back = readFileSync(outFile, "utf8");
  if (back !== STORY) {
    console.error("ERROR: entry.txt read back differently from the story");
    process.exit(1);
  }

  console.log(STORY);
  console.log(`characters: ${STORY.length}`);
  console.log(`words: ${STORY.split(/\s+/).length}`);
  console.log(`sentences: ${countSentences(STORY)}`);
  console.log(`wrote: ${outFile}`);
}

main();
