import { assertEquals } from "../../test_deps.ts";
import { swapCase } from "./mod.ts";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "TEST"],
  ["test string", "TEST STRING"],
  ["Test String", "tEST sTRING"],
  ["TestV2", "tESTv2"],
  ["sWaP cAsE", "SwAp CaSe"],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `case | swap_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(swapCase(input), result);
    },
  });
}
