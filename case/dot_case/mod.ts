import { noCase, Options } from "../no_case/mod.ts";

export { Options };

export function dotCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: ".",
    ...options,
  });
}
