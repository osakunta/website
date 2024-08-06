import { describe, it, expect, vi, afterEach } from "vitest";
import { fetchNavData } from "./fetchNavData";

describe("fetchNavData", () => {
  afterEach(() => {
    vi.restoreAllMocks(); // Restore original implementations after each test
  });

  it("should fetch and return navigation data successfully", async () => {
    const mockData = { data: [{ id: 1, text_en: "Home" }] };

    // Mock the fetch call to return a successful response
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      } as Response),
    );

    const result = await fetchNavData();
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${process.env.DIRECTUS_URL}items/Nav`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  it("should return an empty data object when the fetch response is not ok", async () => {
    // Mock the fetch call to return an unsuccessful response
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: "Not Found",
      } as Response),
    );

    // Ensure that fetchNavData returns an empty data object on fetch error
    const result = await fetchNavData();
    expect(result).toEqual({ data: [] });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should return an empty data object when an exception occurs", async () => {
    // Mock the fetch call to throw an error
    global.fetch = vi.fn(() => {
      throw new Error("Network error");
    });

    // Ensure that fetchNavData returns an empty data object on exception
    const result = await fetchNavData();
    expect(result).toEqual({ data: [] });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
