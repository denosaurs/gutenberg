import { assertEquals } from "../../test_deps.ts";
import { isLowerCase } from "./mod.ts";

const TEST_CASES: [string, boolean][] = [
  ["", false],
  ["test", true],
  ["TEST", false],
  ["Test", false],
  ["123", false],
  ["snake_case", true],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `is_lower_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(isLowerCase(input), result);
    },
  });
}
