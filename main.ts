// make.fun bounty: u-suroto-two-sentence-horror-acea9253
// "Two-Sentence Horror" — writes one original horror story of exactly
// two sentences, at most 400 characters. The first sentence sets a
// domestic unease; the second sentence turns it — the intruder was
// never outside, it has been inside the bed all along.
// Node 24, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "I finally changed the locks after finding my own footprints in the hallway dust every morning, always leading from the front door to my bedroom. Tonight the footprints stopped at the bed — and something under the blanket breathed in time with mine.";

// Guard: the gate requires /output/entry.txt to be 1–400 characters.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them.
const length = [...story].length;
if (length < 1 || length > 400) {
  throw new Error(`Entry must be 1-400 characters, got ${length}.`);
}
if (!story.trim()) {
  throw new Error("Entry must not be whitespace only.");
}
// Guard: the bounty requires EXACTLY two sentences. A length check
// alone would let a three-sentence (or one-sentence) story slip
// through, so count sentence terminators the way the gate does:
// a sentence ends at . ! or ? followed by whitespace or end of text.
const sentences = story
  .trim()
  .split(/(?<=[.!?])\s+/)
  .filter((s) => s.length > 0);
if (sentences.length !== 2) {
  throw new Error(`Entry must be exactly 2 sentences, got ${sentences.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
console.log("Wrote /output/entry.txt");
