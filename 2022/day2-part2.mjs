import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const input = await readFile(join(__dirname, "./day2.input.txt"), "utf8");

function solve() {
  const meScore = { A: 1, B: 2, C: 3 };

  return input
    .split("\n")
    .map((line) => {
      const [opp, result] = line.split(" ");

      switch (result) {
        case "X": {
          return ((meScore[opp] + 1) % 3) + 1;
        }
        case "Y": {
          return 3 + meScore[opp];
        }
        case "Z": {
          return 6 + (meScore[opp] % 3) + 1;
        }
      }
    })
    .reduce((a, b) => a + b, 0);
}

console.log(solve());
