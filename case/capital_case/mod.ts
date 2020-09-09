import { noCase, Options } from "../no_case/mod.ts";
import { upperCaseFirst } from "../upper_case_first/mod.ts";

export { Options };

export function capitalCaseTransform(input: string) {
  return upperCaseFirst(input.toLowerCase());
}

export function capitalCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: " ",
    transform: capitalCaseTransform,
    ...options,
  });
}
