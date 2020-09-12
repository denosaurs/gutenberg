import { assert } from "https://deno.land/std@0.68.0/testing/asserts.ts";
import { assertEquals } from "../../test_deps.ts";
import { stringWidth } from "./mod.ts";

const TEST_CASES: [string, number][] = [
  ["abcde", 5],
  ["古池や", 6],
  ["あいうabc", 9],
  ["ノード.js", 9],
  ["你好", 4],
  ["안녕하세요", 10],
  ["A\uD83C\uDE00BC", 5],
  ["\u001B[31m\u001B[39m", 0],
  ["\u001B]8;;https://github.com\u0007click\u001B]8;;\u0007", 5],
  ["\u{231A}", 2],
  ["\u{2194}\u{FE0F}", 2],
  ["\u{1F469}", 2],
  ["\u{1F469}\u{1F3FF}", 2],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `unicode | width | ${input} -> ${result}`,
    fn: () => {
      assertEquals(stringWidth(input), result);
    },
  });
}
