import { describe, expect, it, vi } from "vitest";
import {
  createClient,
  getNavigationLinks,
  NavigationLink,
  navigationLinkSchema,
} from "./cmsClient";
import { generateMock } from "@anatine/zod-mock";
import { z } from "zod";
import { TranslationKey } from "../hooks/useTranslate";

describe("cmsClient", async () => {
  it("returns valid data from the CMS", async () => {
    const mockData = generateMock(z.array(navigationLinkSchema));
    const client = createClient("http://mockUrl");
    const mockRequest = vi.spyOn(client, "request").mockResolvedValue(mockData);
    mockRequest.mockResolvedValue(mockData);

    const data = await getNavigationLinks(client);

    expect(mockRequest).toHaveBeenCalled();
    expect(data).toEqual(mockData);
  });

  it("fails on invalid label key from the CMS", async () => {
    const mockData: NavigationLink[] = [
      {
        label_key: "invalid" as TranslationKey,
        url: "page",
        category: "GENERAL",
      },
    ];
    const client = createClient("http://mockUrl");
    const mockRequest = vi.spyOn(client, "request").mockResolvedValue(mockData);
    mockRequest.mockResolvedValue(mockData);

    expect(getNavigationLinks(client)).rejects.toThrow();
  });

  it("fails on invalid category from the CMS", async () => {
    const mockData: NavigationLink[] = [
      {
        label_key: "general:nation",
        url: "page",
        category: "invalid" as "GENERAL",
      },
    ];
    const client = createClient("http://mockUrl");
    const mockRequest = vi.spyOn(client, "request").mockResolvedValue(mockData);
    mockRequest.mockResolvedValue(mockData);

    expect(getNavigationLinks(client)).rejects.toThrow();
  });
});
