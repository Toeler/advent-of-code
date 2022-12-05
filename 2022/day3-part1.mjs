import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const input = await readFile(join(__dirname, "./day3.input.txt"), "utf8");

function solve() {
  return input
    .split("\n")
    .map((line) => {
      const items = line.split("");
      const middleIndex = Math.ceil(items.length / 2);

      const firstHalf = items.slice(0, middleIndex);
      const secondHalf = items.slice(middleIndex);

      const intersection = firstHalf.filter((x) => secondHalf.includes(x))[0];

      const result = intersection.charCodeAt(0) - 64;
      return result > 26 ? result - 32 : result + 26;
    })
    .reduce((a, b) => a + b, 0);
}

console.log(solve());
