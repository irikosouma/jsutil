import { describe, expect, it } from "vitest";
import { max } from "@/math/max";

describe("max function", () => {
  it("finds the maximum number in a list of numbers", () => {
    expect(max(1, 2, 3, 4)).toBe(4);
  });

  it("works with negative numbers", () => {
    expect(max(-1, -2, -3, -4)).toBe(-1);
  });

  it("returns the only number for a single-element array", () => {
    expect(max(1)).toBe(1);
  });

  it("compares numeric string values as numbers", () => {
    expect(max("1", "2", "3", "4")).toBe("4");
  });

  it("returns undefined for an empty array", () => {
    expect(max()).toBeUndefined();
  });

  it("handles mixed numeric and string values", () => {
    expect(max(1, "2", 3, "4")).toBe("4");
  });

  it("works with decimal numbers", () => {
    expect(max(1.1, 2.2, 3.3, 4.4)).toBe(4.4);
  });

  it("handles all negative numbers correctly", () => {
    expect(max(-10, -20, -30, -40)).toBe(-10);
  });

  it("finds the maximum in a list of mixed types, treating non-numbers as lower value", () => {
    // Assuming non-number comparisons are handled in a way that considers them lower than any number
    expect(max(0, "a", null, undefined, 42)).toBe(42);
  });

  it("works with a large array of numbers", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(max(...largeArray)).toBe(999);
  });
});
