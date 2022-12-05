import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const input = await readFile(join(__dirname, "./day2.input.txt"), "utf8");

function solve() {
  const oppCodes = { A: 1, B: 2, C: 3 };
  const meCodes = { X: 1, Y: 2, Z: 3 };

  return input
    .split("\n")
    .map((line) => {
      const [opp, me] = line.split(" ");
      const oppScore = oppCodes[opp];
      const meScore = meCodes[me];

      let winScore = 0;
      if (oppScore === meScore) {
        winScore = 3;
      } else if (meScore === 1) {
        winScore = oppScore === 3 ? 6 : 0;
      } else if (oppScore === 1) {
        winScore = meScore === 3 ? 0 : 6;
      } else {
        winScore = meScore > oppScore ? 6 : 0;
      }

      return winScore + meScore;
    })
    .reduce((a, b) => a + b, 0);
}

console.log(solve());
