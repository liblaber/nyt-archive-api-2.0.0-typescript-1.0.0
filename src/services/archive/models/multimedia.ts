import { z } from "zod";
import { legacy, legacyRequest, legacyResponse } from "./legacy";

/**
 * The shape of the model inside the application code - what the users use
 */
export const multimedia: any = z.lazy(() => {
  return z.object({
    rank: z.number().optional().nullable(),
    subtype: z.string().optional().nullable(),
    subType: z.string().optional().nullable(),
    caption: z.string().optional().nullable(),
    credit: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    height: z.number().optional().nullable(),
    width: z.number().optional().nullable(),
    legacy: legacy.optional().nullable(),
    cropName: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Multimedia} multimedia
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {Legacy}
 * @property {string}
 */
export type Multimedia = z.infer<typeof multimedia>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const multimediaResponse: any = z.lazy(() => {
  return z
    .object({
      rank: z.number().optional().nullable(),
      subtype: z.string().optional().nullable(),
      subType: z.string().optional().nullable(),
      caption: z.string().optional().nullable(),
      credit: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      url: z.string().optional().nullable(),
      height: z.number().optional().nullable(),
      width: z.number().optional().nullable(),
      legacy: legacyResponse.optional().nullable(),
      crop_name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      rank: data["rank"],
      subtype: data["subtype"],
      subType: data["subType"],
      caption: data["caption"],
      credit: data["credit"],
      type: data["type"],
      url: data["url"],
      height: data["height"],
      width: data["width"],
      legacy: data["legacy"],
      cropName: data["crop_name"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const multimediaRequest: any = z.lazy(() => {
  return z
    .object({
      rank: z.number().nullish(),
      subtype: z.string().nullish(),
      subType: z.string().nullish(),
      caption: z.string().nullish(),
      credit: z.string().nullish(),
      type: z.string().nullish(),
      url: z.string().nullish(),
      height: z.number().nullish(),
      width: z.number().nullish(),
      legacy: legacyRequest.nullish(),
      cropName: z.string().nullish(),
    })
    .transform((data) => ({
      rank: data["rank"],
      subtype: data["subtype"],
      subType: data["subType"],
      caption: data["caption"],
      credit: data["credit"],
      type: data["type"],
      url: data["url"],
      height: data["height"],
      width: data["width"],
      legacy: data["legacy"],
      crop_name: data["cropName"],
    }));
});
