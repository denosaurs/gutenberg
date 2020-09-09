import { assertEquals } from "../../test_deps.ts";
import { headerCase } from "./mod.ts";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "Test"],
  ["test string", "Test-String"],
  ["Test String", "Test-String"],
  ["TestV2", "Test-V2"],
  ["version 1.2.10", "Version-1-2-10"],
  ["version 1.21.0", "Version-1-21-0"],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `header_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(headerCase(input), result);
    },
  });
}
