import { assertEquals } from "../../test_deps.ts";
import { isUpperCase } from "./mod.ts";

const TEST_CASES: [string, boolean][] = [
  ["", false],
  ["test", false],
  ["TEST", true],
  ["Test", false],
  ["123", false],
  ["CONSTANT_CASE", true],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `is_upper_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(isUpperCase(input), result);
    },
  });
}
