import { capitalCase, Options } from "../capital_case/mod.ts";

export { Options };

export function headerCase(input: string, options: Options = {}) {
  return capitalCase(input, {
    delimiter: "-",
    ...options,
  });
}
