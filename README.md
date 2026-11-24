# Two-Sentence Horror

[![make.fun · u-suroto-two-sentence-horror-acea9253](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/h05meigames/makefun-two-sentence-horror/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/h05meigames/makefun-two-sentence-horror/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)

Entry for the [make.fun bounty "Two-Sentence Horror"](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253) — one original horror story of exactly two sentences, at most 400 characters. The first sentence sets a domestic unease; the second sentence turns it: the intruder was never outside — it has been inside the bed all along.

Try make.fun with my referral: https://make.fun/r/0ene8b3q

## The story

> I finally changed the locks after finding my own footprints in the hallway dust every morning, always leading from the front door to my bedroom. Tonight the footprints stopped at the bed — and something under the blanket breathed in time with mine.

248 characters, exactly 2 sentences.

## How it works

`main.ts` (Node 22+, standard library only) writes the story to `/output/entry.txt` — UTF-8 text, no trailing newline. Guards refuse to write an invalid entry: 1–400 characters counted in code points, non-whitespace only, and exactly 2 sentences (counted at `.`/`!`/`?` followed by whitespace or end of text).

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
