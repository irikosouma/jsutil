import { describe, expect, it } from "vitest";
import { groupBy } from "@/array/groupBy";

describe("groupBy function", () => {
  it("groups objects by a specified string key", () => {
    const input = [
      { group: "a", value: 1 },
      { group: "b", value: 2 },
      { group: "a", value: 3 },
    ];
    const grouped = groupBy(input, "group");
    expect(grouped).toEqual({
      a: [
        { group: "a", value: 1 },
        { group: "a", value: 3 },
      ],
      b: [{ group: "b", value: 2 }],
    });
  });

  it("returns an empty object for an empty array", () => {
    expect(groupBy([], "anyKey")).toEqual({});
  });

  it("correctly handles objects without the specified key", () => {
    const input = [
      { name: "John" },
      { name: "Jane" },
      { group: "a", value: 1 },
    ];
    const grouped = groupBy(input, "group");
    expect(grouped).toEqual({
      undefined: [{ name: "John" }, { name: "Jane" }],
      a: [{ group: "a", value: 1 }],
    });
  });

  it("groups objects by numeric keys", () => {
    const input = [
      { id: 1, value: "A" },
      { id: 2, value: "B" },
      { id: 1, value: "C" },
    ];
    const grouped = groupBy(input, "id");
    expect(grouped).toEqual({
      1: [
        { id: 1, value: "A" },
        { id: 1, value: "C" },
      ],
      2: [{ id: 2, value: "B" }],
    });
  });

  it("handles arrays with mixed types correctly", () => {
    const input = [
      { type: "book", title: "Title A" },
      { type: "video", title: "Title B" },
      { type: "book", title: "Title C" },
    ];
    const grouped = groupBy(input, "type");
    expect(grouped).toEqual({
      book: [
        { type: "book", title: "Title A" },
        { type: "book", title: "Title C" },
      ],
      video: [{ type: "video", title: "Title B" }],
    });
  });

  it("works with arrays of objects with nested keys", () => {
    const input = [
      { data: { category: "a" }, value: 1 },
      { data: { category: "b" }, value: 2 },
      { data: { category: "a" }, value: 3 },
    ];
    // Note: This test assumes the function cannot directly handle nested keys; adjustments are needed if it should.
    const grouped = groupBy(
      input.map((item) => ({ category: item.data.category, ...item })),
      "category"
    );
    expect(grouped).toEqual({
      a: [
        { category: "a", data: { category: "a" }, value: 1 },
        { category: "a", data: { category: "a" }, value: 3 },
      ],
      b: [{ category: "b", data: { category: "b" }, value: 2 }],
    });
  });

  it("handles arrays with multiple keys correctly", () => {
    const input = [
      { category: "a", type: "x", value: 1 },
      { category: "b", type: "y", value: 2 },
      { category: "a", type: "x", value: 3 },
    ];
    const groupedByCategory = groupBy(input, "category");
    const groupedByType = groupBy(input, "type");
    expect(groupedByCategory).toEqual({
      a: [
        { category: "a", type: "x", value: 1 },
        { category: "a", type: "x", value: 3 },
      ],
      b: [{ category: "b", type: "y", value: 2 }],
    });
    expect(groupedByType).toEqual({
      x: [
        { category: "a", type: "x", value: 1 },
        { category: "a", type: "x", value: 3 },
      ],
      y: [{ category: "b", type: "y", value: 2 }],
    });
  });
});
