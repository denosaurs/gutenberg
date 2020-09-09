import { assertEquals } from "../../test_deps.ts";
import { lowerCase, localeLowerCase } from "./mod.ts";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "test"],
  ["TEST", "test"],
  ["test string", "test string"],
  ["TEST STRING", "test string"],
];

const LOCALE_TEST_CASES: [string, string, string][] = [
  ["STRING", "strıng", "tr"],
];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `lower_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(lowerCase(input), result);
    },
  });
}

for (const [input, result, locale] of LOCALE_TEST_CASES) {
  Deno.test({
    name: `locale_lower_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(localeLowerCase(input, locale), result);
    },
  });
}
