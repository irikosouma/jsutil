import { describe, expect, it, vi } from "vitest";
import { forEach } from "@/array/forEach";

describe("forEach function", () => {
  it("executes the callback for each element of the array", () => {
    const array = [1, 2, 3];
    const callback = vi.fn();

    forEach(array, callback);

    expect(callback).toHaveBeenCalledTimes(array.length);
  });

  it("provides each element and its index to the callback", () => {
    const array = ["a", "b", "c"];
    const callback = vi.fn();

    forEach(array, callback);

    expect(callback).toHaveBeenNthCalledWith(1, "a", 0);
    expect(callback).toHaveBeenNthCalledWith(2, "b", 1);
    expect(callback).toHaveBeenNthCalledWith(3, "c", 2);
  });

  it("handles an empty array correctly", () => {
    const array = [];
    const callback = vi.fn();

    forEach(array, callback);

    expect(callback).not.toHaveBeenCalled();
  });

  it("works with arrays of mixed types", () => {
    const array = [1, "two", true];
    const callback = vi.fn();

    forEach(array, callback);

    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenNthCalledWith(1, 1, 0);
    expect(callback).toHaveBeenNthCalledWith(2, "two", 1);
    expect(callback).toHaveBeenNthCalledWith(3, true, 2);
  });

  it("can perform operations within the callback", () => {
    const array = [1, 2, 3];
    const results: number[] = [];
    const callback = (item: number) => results.push(item * 2);

    forEach(array, callback);

    expect(results).toEqual([2, 4, 6]);
  });
});
