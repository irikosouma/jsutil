import { head } from "@/array/head";
import { describe, expect, it } from "vitest";

describe("head function", () => {
  it("returns the first element of an array of numbers", () => {
    const input = [1, 2, 3, 4];
    const expectedResult = 1;
    expect(head(input)).toBe(expectedResult);
  });

  it("returns the first element of an array of strings", () => {
    const input = ["a", "b", "c", "d"];
    const expectedResult = "a";
    expect(head(input)).toBe(expectedResult);
  });

  it("returns undefined for an empty array", () => {
    const input = [];
    const expectedResult = undefined;
    expect(head(input)).toBe(expectedResult);
  });

  it("works with arrays of mixed types", () => {
    const input = [1, "two", true, null];
    const expectedResult = 1;
    expect(head(input)).toBe(expectedResult);
  });

  it("returns the first element for an array with a single element", () => {
    const input = [1];
    const expectedResult = 1;
    expect(head(input)).toBe(expectedResult);
  });

  it("handles arrays containing undefined and null values", () => {
    const inputWithUndefined = [undefined, null, 0];
    const expectedResultForUndefined = undefined;
    expect(head(inputWithUndefined)).toBe(expectedResultForUndefined);

    const inputWithNull = [null, undefined, 0];
    const expectedResultForNull = null;
    expect(head(inputWithNull)).toBe(expectedResultForNull);
  });

  it("works with a large array", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    const expectedResult = 0; // Since the array is filled with numbers starting from 0
    expect(head(largeArray)).toBe(expectedResult);
  });
});
