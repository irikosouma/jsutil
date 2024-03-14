import { describe, expect, it } from "vitest";
import { include } from "@/array/include";

describe("include function", () => {
  it("returns true if the array includes the specified number", () => {
    const array = [1, 2, 3, 4, 5];
    const item = 3;

    const result = include(array, item);

    expect(result).toBe(true);
  });

  it("returns false if the array does not include the specified string", () => {
    const array = ["apple", "banana", "orange"];
    const item = "grape";

    const result = include(array, item);

    expect(result).toBe(false);
  });

  it("works correctly with boolean values", () => {
    const array = [true, false, true];
    const item = false;

    const result = include(array, item);

    expect(result).toBe(true);
  });

  it("distinguishes between similar values of different types", () => {
    const array = [1, "1", true];
    const item = "1";

    const result = include(array, item);

    expect(result).toBe(true); // The string "1" is present, distinguishing it from the number 1.
  });

  it("returns false for an empty array", () => {
    const array = [];
    const item = 1;

    const result = include(array, item);

    expect(result).toBe(false);
  });
});
