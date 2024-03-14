import { describe, expect, it } from "vitest";
import { reduceRight } from "@/array/reduceRight";

describe("reduceRight function", () => {
  it("reduces an array of numbers into a sum", () => {
    const array = [1, 2, 3, 4];
    const callback = (acc, currentValue) => acc + currentValue;
    const initialValue = 0;
    const expectedResult = 10; // Sum of array elements

    const result = reduceRight(array, callback, initialValue);

    expect(result).toBe(expectedResult);
  });

  it("reduces an array right-to-left, concatenating strings in reverse order", () => {
    const array = ["world", " ", "hello"];
    const callback = (acc, currentValue) => acc + currentValue;
    const initialValue = "";
    const expectedResult = "hello world"; // Concatenation in reverse

    const result = reduceRight(array, callback, initialValue);

    expect(result).toBe(expectedResult);
  });

  it("properly utilizes the index in the reduction process", () => {
    const array = [1, 2, 3];
    const callback = (acc, currentValue, index) => acc + currentValue * index;
    const initialValue = 0;
    const expectedResult = 8; // 0*1 + 1*2 + 2*3

    const result = reduceRight(array, callback, initialValue);

    expect(result).toBe(expectedResult);
  });

  it("handles an empty array with an initial value correctly", () => {
    const array = [];
    const callback = vi.fn();
    const initialValue = "initial";
    const expectedResult = "initial"; // Should return the initial value directly

    const result = reduceRight(array, callback, initialValue);

    expect(result).toBe(expectedResult);
    expect(callback).not.toHaveBeenCalled();
  });

  it("accumulates objects into an array in reverse order", () => {
    const array = [{ id: 3 }, { id: 2 }, { id: 1 }];
    const callback = (acc, currentValue) => [...acc, currentValue];
    const initialValue = [];
    const expectedResult = [{ id: 1 }, { id: 2 }, { id: 3 }]; // Reverse order accumulation

    const result = reduceRight(array, callback, initialValue);

    expect(result).toEqual(expectedResult);
  });
});
