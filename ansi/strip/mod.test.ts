import { assertEquals } from "../../test_deps.ts";
import { stripAnsi } from "./mod.ts";

const TEST_CASES: [string, string][] = [
  ["", ""],
  [
    "\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m",
    "foofoo",
  ],
  ["\u001B[00;38;5;244m\u001B[m\u001B[00;38;5;33mfoo\u001B[0m", "foo"],
  ["\u001B[0;33;49;3;9;4mbar\u001B[0m", "bar"],
  ["\u001B]8;;https://github.com\u0007click\u001B]8;;\u0007", "click"],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `ansi | strip | ${input} -> ${result}`,
    fn: () => {
      assertEquals(stripAnsi(input), result);
      assertEquals(stripAnsi(input).length, result.length);
    },
  });
}
