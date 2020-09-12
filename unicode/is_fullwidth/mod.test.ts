import { assert } from "https://deno.land/std@0.68.0/testing/asserts.ts";
import { assertEquals } from "../../test_deps.ts";
import { isFullwidth } from "./mod.ts";

const TEST_CASES: [string, boolean][] = [
  ["あ", true],
  ["谢", true],
  ["고", true],
  ["a", false],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `unicode | fullwidth | ${input} -> ${result}`,
    fn: () => {
      const codepoint = input.codePointAt(0);
      assert(codepoint);
      assertEquals(isFullwidth(codepoint), result);
    },
  });
}
