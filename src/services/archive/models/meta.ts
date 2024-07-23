import { z } from "zod";

/**
 * The shape of the model inside the application code - what the users use
 */
export const meta: any = z.lazy(() => {
  return z.object({
    hits: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Meta} meta
 * @property {number}
 */
export type Meta = z.infer<typeof meta>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const metaResponse: any = z.lazy(() => {
  return z
    .object({
      hits: z.number().optional().nullable(),
    })
    .transform((data) => ({
      hits: data["hits"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const metaRequest: any = z.lazy(() => {
  return z.object({ hits: z.number().nullish() }).transform((data) => ({
    hits: data["hits"],
  }));
});
