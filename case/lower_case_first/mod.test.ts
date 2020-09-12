import { assertEquals } from "../../test_deps.ts";
import { lowerCaseFirst } from "./mod.ts";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "test"],
  ["TEST", "tEST"],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `case | lower_case_first | ${input} -> ${result}`,
    fn: () => {
      assertEquals(lowerCaseFirst(input), result);
    },
  });
}
