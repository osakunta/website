import { translationKeySchema } from "../hooks/useTranslate";
import { createDirectus, readItems, rest } from "@directus/sdk";
import { z } from "zod";

type Schema = {
  NavigationLink: NavigationLink[];
};

export const navigationLinkSchema = z.object({
  label_key: translationKeySchema,
  url: z.string(),
  category: z.enum(["GENERAL", "FOR_MEMBERS"]),
});

export type NavigationLink = z.infer<typeof navigationLinkSchema>;

type CmsClient = ReturnType<typeof createClient>;

export const createClient = (url: string) => {
  return createDirectus<Schema>(url).with(rest());
};

export const getNavigationLinks = async (client: CmsClient) => {
  const links = await client.request(readItems("NavigationLink"));

  return links.map((link) => navigationLinkSchema.parse(link));
};
