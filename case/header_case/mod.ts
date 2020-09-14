import { capitalCase, Options } from "../capital_case/mod.ts";

export type { Options };

export function headerCase(input: string, options: Options = {}) {
  return capitalCase(input, {
    delimiter: "-",
    ...options,
  });
}
