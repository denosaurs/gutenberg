import { assertEquals } from "../../test_deps.ts";
import { camelCase, camelCaseTransformMerge, Options } from "./mod.ts";

const TEST_CASES: [string, string, Options?][] = [
  ["", ""],
  ["test", "test"],
  ["test string", "testString"],
  ["Test String", "testString"],
  ["TestV2", "testV2"],
  ["_foo_bar_", "fooBar"],
  ["version 1.2.10", "version_1_2_10"],
  ["version 1.21.0", "version_1_21_0"],
  ["version 1.2.10", "version1210", { transform: camelCaseTransformMerge }],
];

for (const [input, result, options] of TEST_CASES) {
  Deno.test({
    name: `camel_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(camelCase(input, options), result);
    },
  });
}
