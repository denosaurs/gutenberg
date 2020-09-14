import { noCase, Options } from "../no_case/mod.ts";
import { upperCase } from "../upper_case/mod.ts";

export type { Options };

export function constantCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: "_",
    transform: upperCase,
    ...options,
  });
}
