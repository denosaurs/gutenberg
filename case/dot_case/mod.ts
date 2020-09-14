import { noCase, Options } from "../no_case/mod.ts";

export type { Options };

export function dotCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: ".",
    ...options,
  });
}
