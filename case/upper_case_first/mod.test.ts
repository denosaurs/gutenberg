import { assertEquals } from "../../test_deps.ts";
import { upperCaseFirst } from "./mod.ts";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "Test"],
  ["TEST", "TEST"],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `case | upper_case_first | ${input} -> ${result}`,
    fn: () => {
      assertEquals(upperCaseFirst(input), result);
    },
  });
}
