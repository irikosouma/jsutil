import { describe, expect, it } from "vitest";
import { min } from "@/math/min";

describe("min function", () => {
  it("finds the minimum number in a list of numbers", () => {
    expect(min(1, 2, 3, 4)).toBe(1);
  });

  it("works with negative numbers", () => {
    expect(min(-1, -2, -3, -4)).toBe(-4);
  });

  it("returns the only number for a single-element array", () => {
    expect(min(1)).toBe(1);
  });

  it("compares numeric string values as numbers", () => {
    expect(min("1", "2", "3", "4")).toBe("1");
  });

  it("returns undefined for an empty array", () => {
    expect(min()).toBeUndefined();
  });

  it("handles mixed numeric and string values", () => {
    expect(min(1, "2", 3, "4")).toBe(1);
  });

  it("works with decimal numbers", () => {
    expect(min(1.1, 2.2, 3.3, 4.4)).toBe(1.1);
  });

  it("handles all negative numbers correctly", () => {
    expect(min(-10, -20, -30, -40)).toBe(-40);
  });

  it("finds the minimum in a list of mixed types, treating non-numbers as lower value", () => {
    // Assuming non-number comparisons are handled in a way that considers them lower than any number
    expect(min(0, "a", null, undefined, 42)).toBe(0); // This is assuming your comparison logic treats non-numbers in a specific way
  });

  it("works with a large array of numbers", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(min(...largeArray)).toBe(0);
  });
});
