import { describe, expect, it } from "vitest";
import { push } from "@/array/push";

describe("push function", () => {
  it("adds items to the end of the array", () => {
    const array = [1, 2, 3];
    push(array, 4, 5);

    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns the number of items added", () => {
    const array = [1, 2, 3];
    const result = push(array, 4, 5);

    expect(result).toBe(5); // Number of items added
  });

  it("works with items of mixed types", () => {
    const array = [1, "two", true];
    const result = push(array, null, {}, []);

    expect(array).toEqual([1, "two", true, null, {}, []]);
    expect(result).toBe(6); // Number of items added
  });

  it("correctly handles adding no items", () => {
    const array = [1, 2, 3];
    const result = push(array);

    expect(array).toEqual([1, 2, 3]);
    expect(result).toBe(3); // No items added
  });

  it("modifies the original array", () => {
    const array = ["original"];
    push(array, "modified");

    expect(array).toContain("modified");
  });
});
