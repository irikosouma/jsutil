import { describe, expect, it } from "vitest";
import { join } from "@/array/join";

describe("join function", () => {
  it("joins elements of an array of numbers with a specified number separator", () => {
    expect(join([1, 2, 3, 4], 0)).toEqual([1, 0, 2, 0, 3, 0, 4]);
  });

  it("joins elements of an array of strings with a specified string separator", () => {
    expect(join(["a", "b", "c", "d"], ",")).toEqual([
      "a",
      ",",
      "b",
      ",",
      "c",
      ",",
      "d",
    ]);
  });

  it("returns an empty array when given an empty array", () => {
    expect(join([], ",")).toEqual([]);
  });

  it("handles a single element array without adding separators", () => {
    expect(join([1], ",")).toEqual([1]);
  });

  it("works with arrays of mixed types using a string separator", () => {
    expect(join([1, "two", true], ",")).toEqual([1, ",", "two", ",", true]);
  });

  it("joins elements with an array as a separator", () => {
    expect(join([1, 2], ["a", "b"])).toEqual([1, ["a", "b"], 2]);
  });

  it("uses an object as a separator", () => {
    const separator = { sep: "separator" };
    expect(join(["start", "end"], separator)).toEqual([
      "start",
      separator,
      "end",
    ]);
  });

  it("handles arrays with null and undefined values", () => {
    expect(join([null, undefined, 0], "sep")).toEqual([
      null,
      "sep",
      undefined,
      "sep",
      0,
    ]);
  });

  it("works when the separator is a boolean value", () => {
    expect(join([1, 2, 3], true)).toEqual([1, true, 2, true, 3]);
  });

  it("joins elements correctly when the separator is a numeric zero", () => {
    expect(join(["first", "second"], 0)).toEqual(["first", 0, "second"]);
  });
});
