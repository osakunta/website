import { expect, test, vi } from "vitest";
import useCMS from "./useCMS";
import { renderHook } from "@testing-library/react";

test("calls fetch", () => {
  const fetchMock = vi.spyOn(global, "fetch");

  renderHook(() => useCMS({ collection: "text" }));

  expect(fetchMock).toHaveBeenCalled();
});

test("does not call fetch on rerender", () => {
  const fetchMock = vi.spyOn(global, "fetch");

  const { rerender } = renderHook(() => useCMS({ collection: "text" }));
  rerender();

  expect(fetchMock).toHaveBeenCalledTimes(1);
});

test.skip("calls fetch once for the same collection", () => {
  const fetchMock = vi.spyOn(global, "fetch");

  renderHook(() => useCMS({ collection: "text" }));
  renderHook(() => useCMS({ collection: "text" }));
  expect(fetchMock).toHaveBeenCalledTimes(1);
});

test("calls fetch once per collection", () => {
  const fetchMock = vi.spyOn(global, "fetch");

  renderHook(() => useCMS({ collection: "text" }));
  renderHook(() => useCMS({ collection: "image" }));
  expect(fetchMock).toHaveBeenCalledTimes(2);
});
