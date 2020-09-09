import { assertEquals } from "../test_deps.ts";
import * as changeCase from "./mod.ts";

Deno.test({
  name: "change_case | exports expected methods",
  fn: () => {
    assertEquals(typeof changeCase, "object");
  },
});
