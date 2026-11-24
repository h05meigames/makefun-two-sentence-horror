# Two-Sentence Horror

[![make.fun · u-suroto-two-sentence-horror-acea9253](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/h05meigames/makefun-two-sentence-horror/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/h05meigames/makefun-two-sentence-horror/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)

Entry for the [make.fun bounty "Two-Sentence Horror"](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253) — one original horror story of exactly two sentences, at most 400 characters. The first sentence sets a calm domestic scene; the second sentence turns it: the child was never alone in the crib — someone was already inside with her.

Try make.fun with my referral: https://make.fun/r/0ene8b3q

## The story

> The baby monitor showed my daughter asleep in her crib, exactly where I had tucked her in an hour ago. Then I realized the hand gently stroking her hair belonged to someone standing inside the crib with her.

207 characters, exactly 2 sentences, 38 words.

## How it works

`main.ts` (Node 22.18+, standard library only) writes the story to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) — UTF-8 text, no trailing newline. It validates before writing and reads the file back afterwards: 1–400 characters, non-whitespace only, exactly 2 sentences (counted at `.`/`!`/`?` followed by whitespace or end of text), a single line with no line breaks, and it must end with sentence-ending punctuation. Any failure exits non-zero and writes nothing.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
