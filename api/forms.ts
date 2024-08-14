import { forms, forms_v1 } from "@googleapis/forms";
import { z } from "zod";
const api = forms({ version: "v1" });

/*
 * Serve data from Google Forms
 * for the registration functionalities of the website
 *
 * zod is used to validate the responses from the Google Forms API and
 * strip sensitive information from the responses
 *
 * RESPONSES CONTAIN SENSITIVE INFORMATION
 * DO NOT RETURN, LEAK OR LOG THEM
 */

//*
// * Google Form response with sensitive information stripped
// */
const strippedFormResponseSchema = z.object({});
type StrippedFormResponse = z.infer<typeof strippedFormResponseSchema>;

/*
 * Get all responses for a Google Form
 */
const getAllResponses = async (
  formId: string,
  pageToken?: string,
): Promise<StrippedFormResponse[]> => {
  const res = await api.forms.responses.list({ formId, pageToken });
  const responses =
    res.data.responses?.map((response) =>
      strippedFormResponseSchema.parse(response),
    ) ?? [];

  if (!res.data.nextPageToken) {
    return responses;
  }

  const nextPageResponses = await getAllResponses(
    formId,
    res.data.nextPageToken,
  );

  return responses.concat(nextPageResponses);
};

export type Form = {
  numberOfResponses: number;
};

export const getFormData = async (id: string) => {
  const responses = await getAllResponses("formId");

  return {
    numberOfResponses: responses.length,
  };
};
