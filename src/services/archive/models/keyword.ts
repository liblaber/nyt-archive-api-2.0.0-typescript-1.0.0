import { z } from "zod";

/**
 * The shape of the model inside the application code - what the users use
 */
export const keyword: any = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    value: z.string().optional().nullable(),
    rank: z.number().optional().nullable(),
    major: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Keyword} keyword
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 */
export type Keyword = z.infer<typeof keyword>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const keywordResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
      rank: z.number().optional().nullable(),
      major: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data["name"],
      value: data["value"],
      rank: data["rank"],
      major: data["major"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const keywordRequest: any = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      value: z.string().nullish(),
      rank: z.number().nullish(),
      major: z.string().nullish(),
    })
    .transform((data) => ({
      name: data["name"],
      value: data["value"],
      rank: data["rank"],
      major: data["major"],
    }));
});
