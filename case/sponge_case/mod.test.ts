import { assert } from "../../test_deps.ts";
import { spongeCase } from "./mod.ts";

/* Since strings are non-deterministic, we test string length to ensure integrity */

const TEST_CASES: [string, number][] = [
  ["", 0],
  ["test", 4],
  ["test string", 11],
  ["Test String", 11],
  ["TestV2", 6],
  ["rAnDoM cAsE", 11],
];

for (const [input, length] of TEST_CASES) {
  Deno.test({
    name: `case | sponge_case | ${input} -> ${length}`,
    fn: () => {
      assert(spongeCase(input).length === length);
    },
  });
}
