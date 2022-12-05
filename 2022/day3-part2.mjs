import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const input = await readFile(join(__dirname, "./day3.input.txt"), "utf8");

Array.prototype.chunk = function (size) {
  return this.reduce(
    (splitArrays, _, i) =>
      i % size ? splitArrays : [...splitArrays, this.slice(i, i + size)],
    []
  );
};

function solve() {
  return input
    .split("\n")
    .chunk(3)
    .map((group) => group.map((line) => line.split("")))
    .map((group) => {
      const intersection = group[0].filter(
        (x) => group[1].includes(x) && group[2].includes(x)
      )[0];

      const result = intersection.charCodeAt(0) - 64;
      return result > 26 ? result - 32 : result + 26;
    })
    .reduce((a, b) => a + b, 0);
}

console.log(solve());
