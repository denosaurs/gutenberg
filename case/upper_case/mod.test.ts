import { assertEquals } from "../../test_deps.ts";
import { upperCase, localeUpperCase } from "./mod.ts";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "TEST"],
  ["test string", "TEST STRING"],
  ["Test String", "TEST STRING"],
  ["\u0131", "I"],
];

const LOCALE_TEST_CASES: [string, string, string][] = [["i", "\u0130", "tr"]];

for (const [input, result] of TEST_CASES) {
  Deno.test({
    name: `case | upper_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(upperCase(input), result);
    },
  });
}

for (const [input, result, locale] of LOCALE_TEST_CASES) {
  Deno.test({
    name: `case | locale_upper_case | ${input} -> ${result}`,
    fn: () => {
      assertEquals(localeUpperCase(input, locale), result);
    },
  });
}
