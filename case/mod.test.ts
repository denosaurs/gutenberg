import { assertEquals } from "../test_deps.ts";
import * as changeCase from "./mod.ts";

Deno.test({
  name: "case | case | exports expected methods",
  fn: () => {
    assertEquals(typeof changeCase, "object");
  },
});
