import { dotCase, Options } from "../dot_case/mod.ts";

export type { Options };

export function pathCase(input: string, options: Options = {}) {
  return dotCase(input, {
    delimiter: "/",
    ...options,
  });
}
