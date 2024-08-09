import { test, describe } from "node:test";
import assert from "node:assert";
import { add, multiply } from "./index.ts";

describe("ADD", () => {
  test("success", () => assert.strictEqual(add(4, 5), 9));
  test("fail", () => assert.notStrictEqual(add(4, 5), 10));
});

describe("MULTIPLY", () => {
  test("success", () => assert.strictEqual(multiply(4, 5), 20));
  test("fail", () => assert.notStrictEqual(multiply(4, 5), 10));
});
