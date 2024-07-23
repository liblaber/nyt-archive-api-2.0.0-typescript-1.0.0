import { z } from "zod";
import { meta, metaRequest, metaResponse } from "./meta";
import { article, articleRequest, articleResponse } from "./article";

/**
 * The shape of the model inside the application code - what the users use
 */
export const response: any = z.lazy(() => {
  return z.object({
    meta: meta.optional().nullable(),
    docs: z.array(article).optional().nullable(),
  });
});

/**
 *
 * @typedef  {Response} response
 * @property {Meta}
 * @property {Article[]}
 */
export type Response = z.infer<typeof response>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseResponse: any = z.lazy(() => {
  return z
    .object({
      meta: metaResponse.optional().nullable(),
      docs: z.array(articleResponse).optional().nullable(),
    })
    .transform((data) => ({
      meta: data["meta"],
      docs: data["docs"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const responseRequest: any = z.lazy(() => {
  return z
    .object({
      meta: metaRequest.nullish(),
      docs: z.array(articleRequest).nullish(),
    })
    .transform((data) => ({
      meta: data["meta"],
      docs: data["docs"],
    }));
});
