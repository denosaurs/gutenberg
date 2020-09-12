import { assertMatch } from "../../test_deps.ts";
import { stripAnsi } from "../strip/mod.ts";
import { ansiRegex } from "./mod.ts";

const TEST_CASES: string[] = [
  "foo\u001B[4mcake\u001B[0m",
  "\u001B[4mcake\u001B[0m",
  "foo\u001B[4mcake\u001B[0m",
  "\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m",
  "foo\u001B[mfoo",

  "\u001B[00;38;5;244m\u001B[m\u001B[00;38;5;33mfoo\u001B[0m",

  "\u001B[0;33;49;3;9;4mbar\u001B[0m",

  "foo\u001B[0gbar",
  "foo\u001B[Kbar",
  "foo\u001B[2Jbar",

  "\u001B]8;k=v;https://example-a.com/?a_b=1&c=2#tit%20le\u0007click\u001B]8;;\u0007",
  "\u001B]8;;mailto:no-replay@mail.com\u0007mail\u001B]8;;\u0007",
];

for (const input of TEST_CASES) {
  Deno.test({
    name: `ansi | regex | ${stripAnsi(input)}`,
    fn: () => {
      assertMatch(input, ansiRegex());
    },
  });
}
