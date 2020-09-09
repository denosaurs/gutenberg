import { assertEquals } from "../../test_deps.ts";
import { dotCase } from "./mod.ts";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "test"],
  ["test string", "test.string"],
  ["Test String", "test.string"],
  ["dot.case", "dot.case"],
  ["path/case", "path.case"],
  ["TestV2", "test.v2"],
  ["version 1.2.10", "version.1.2.10"],
  ["version 1.21.0", "version.1.21.0"],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `dot_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(dotCase(input), result);
    },
  });
}
