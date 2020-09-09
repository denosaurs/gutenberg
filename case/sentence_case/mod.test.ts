import { assertEquals } from "../../test_deps.ts";
import { sentenceCase } from "./mod.ts";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "Test"],
  ["test string", "Test string"],
  ["Test String", "Test string"],
  ["TestV2", "Test v2"],
  ["version 1.2.10", "Version 1 2 10"],
  ["version 1.21.0", "Version 1 21 0"],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `sentence_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(sentenceCase(input), result);
    },
  });
}
