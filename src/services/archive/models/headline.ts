import { z } from "zod";

/**
 * The shape of the model inside the application code - what the users use
 */
export const headline: any = z.lazy(() => {
  return z.object({
    main: z.string().optional().nullable(),
    kicker: z.string().optional().nullable(),
    contentKicker: z.string().optional().nullable(),
    printHeadline: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    seo: z.string().optional().nullable(),
    sub: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Headline} headline
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type Headline = z.infer<typeof headline>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const headlineResponse: any = z.lazy(() => {
  return z
    .object({
      main: z.string().optional().nullable(),
      kicker: z.string().optional().nullable(),
      content_kicker: z.string().optional().nullable(),
      print_headline: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      seo: z.string().optional().nullable(),
      sub: z.string().optional().nullable(),
    })
    .transform((data) => ({
      main: data["main"],
      kicker: data["kicker"],
      contentKicker: data["content_kicker"],
      printHeadline: data["print_headline"],
      name: data["name"],
      seo: data["seo"],
      sub: data["sub"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const headlineRequest: any = z.lazy(() => {
  return z
    .object({
      main: z.string().nullish(),
      kicker: z.string().nullish(),
      contentKicker: z.string().nullish(),
      printHeadline: z.string().nullish(),
      name: z.string().nullish(),
      seo: z.string().nullish(),
      sub: z.string().nullish(),
    })
    .transform((data) => ({
      main: data["main"],
      kicker: data["kicker"],
      content_kicker: data["contentKicker"],
      print_headline: data["printHeadline"],
      name: data["name"],
      seo: data["seo"],
      sub: data["sub"],
    }));
});
