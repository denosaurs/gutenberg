import { ansiRegex } from "../regex/mod.ts";

export function stripAnsi(string: string): string {
  return string.replace(ansiRegex(), "");
}
