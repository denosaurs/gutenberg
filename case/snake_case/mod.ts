import { dotCase, Options } from "../dot_case/mod.ts";

export { Options };

export function snakeCase(input: string, options: Options = {}) {
  return dotCase(input, {
    delimiter: "_",
    ...options,
  });
}
