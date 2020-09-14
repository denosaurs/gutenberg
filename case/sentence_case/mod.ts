import { noCase, Options } from "../no_case/mod.ts";
import { upperCaseFirst } from "../upper_case_first/mod.ts";

export type { Options };

export function sentenceCaseTransform(input: string, index: number) {
  const result = input.toLowerCase();
  if (index === 0) return upperCaseFirst(result);
  return result;
}

export function sentenceCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: " ",
    transform: sentenceCaseTransform,
    ...options,
  });
}
