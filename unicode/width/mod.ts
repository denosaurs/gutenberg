import { stripAnsi } from "../../ansi/strip/mod.ts";
import { isFullwidth } from "../is_fullwidth/mod.ts";
import { emojiRegex } from "../emoji_regex/mod.ts";

export function stringWidth(string: string) {
  string = string.replace(emojiRegex(), "  ");

  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }

  string = stripAnsi(string);

  let width = 0;

  for (let i = 0; i < string.length; i++) {
    const code = string.codePointAt(i)!;

    // Ignore control characters
    if (code <= 0x1f || (code >= 0x7f && code <= 0x9f)) {
      continue;
    }

    // Ignore combining characters
    if (code >= 0x300 && code <= 0x36f) {
      continue;
    }

    // Surrogates
    if (code > 0xffff) {
      i++;
    }

    width += isFullwidth(code) ? 2 : 1;
  }

  return width;
}
