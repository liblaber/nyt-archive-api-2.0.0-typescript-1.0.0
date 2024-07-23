import { z } from "zod";
import { person, personRequest, personResponse } from "./person";

/**
 * The shape of the model inside the application code - what the users use
 */
export const byline: any = z.lazy(() => {
  return z.object({
    original: z.string().optional().nullable(),
    person: z.array(person).optional().nullable(),
    organization: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Byline} byline
 * @property {string}
 * @property {Person[]}
 * @property {string}
 */
export type Byline = z.infer<typeof byline>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bylineResponse: any = z.lazy(() => {
  return z
    .object({
      original: z.string().optional().nullable(),
      person: z.array(personResponse).optional().nullable(),
      organization: z.string().optional().nullable(),
    })
    .transform((data) => ({
      original: data["original"],
      person: data["person"],
      organization: data["organization"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bylineRequest: any = z.lazy(() => {
  return z
    .object({
      original: z.string().nullish(),
      person: z.array(personRequest).nullish(),
      organization: z.string().nullish(),
    })
    .transform((data) => ({
      original: data["original"],
      person: data["person"],
      organization: data["organization"],
    }));
});
