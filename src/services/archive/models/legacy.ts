import { z } from "zod";

/**
 * The shape of the model inside the application code - what the users use
 */
export const legacy: any = z.lazy(() => {
  return z.object({
    xlarge: z.string().optional().nullable(),
    xlargewidth: z.number().optional().nullable(),
    xlargeheight: z.number().optional().nullable(),
    thumbnail: z.string().optional().nullable(),
    thumbnailwidth: z.number().optional().nullable(),
    thumbnailheight: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Legacy} legacy
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type Legacy = z.infer<typeof legacy>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const legacyResponse: any = z.lazy(() => {
  return z
    .object({
      xlarge: z.string().optional().nullable(),
      xlargewidth: z.number().optional().nullable(),
      xlargeheight: z.number().optional().nullable(),
      thumbnail: z.string().optional().nullable(),
      thumbnailwidth: z.number().optional().nullable(),
      thumbnailheight: z.number().optional().nullable(),
    })
    .transform((data) => ({
      xlarge: data["xlarge"],
      xlargewidth: data["xlargewidth"],
      xlargeheight: data["xlargeheight"],
      thumbnail: data["thumbnail"],
      thumbnailwidth: data["thumbnailwidth"],
      thumbnailheight: data["thumbnailheight"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const legacyRequest: any = z.lazy(() => {
  return z
    .object({
      xlarge: z.string().nullish(),
      xlargewidth: z.number().nullish(),
      xlargeheight: z.number().nullish(),
      thumbnail: z.string().nullish(),
      thumbnailwidth: z.number().nullish(),
      thumbnailheight: z.number().nullish(),
    })
    .transform((data) => ({
      xlarge: data["xlarge"],
      xlargewidth: data["xlargewidth"],
      xlargeheight: data["xlargeheight"],
      thumbnail: data["thumbnail"],
      thumbnailwidth: data["thumbnailwidth"],
      thumbnailheight: data["thumbnailheight"],
    }));
});
