import { chunk } from "@/array/chunk";
import { describe, expect, it } from "vitest";

describe("chunk function", () => {
  it("divides an array of numbers into chunks of specified length", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("returns the original array in an array when chunk size is greater than array length", () => {
    expect(chunk([1, 2, 3], 4)).toEqual([[1, 2, 3]]);
  });

  it("handles an empty array correctly", () => {
    expect(chunk([], 2)).toEqual([[]]);
  });

  it("returns the original array in an array when chunk size is less than or equal to 1", () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1, 2, 3]]);
  });

  it("divides an array of mixed types into chunks", () => {
    expect(chunk([1, "two", true, null, {}], 2)).toEqual([
      [1, "two"],
      [true, null],
      [{}],
    ]);
  });

  it("works with arrays containing undefined and null values", () => {
    expect(chunk([undefined, null, 0], 1)).toEqual([[undefined, null, 0]]);
  });

  it("creates chunks correctly when array length is not a multiple of chunk size", () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7],
    ]);
  });

  it("divides a large array into chunks of specified length", () => {
    const largeArray = Array.from({ length: 100 }, (_, i) => i + 1);
    const chunkSize = 10;
    const expectedNumberOfChunks = 10;
    const chunks = chunk(largeArray, chunkSize);
    expect(chunks.length).toEqual(expectedNumberOfChunks);
    expect(chunks[0].length).toEqual(chunkSize);
    expect(chunks[expectedNumberOfChunks - 1].length).toEqual(chunkSize);
  });
});
