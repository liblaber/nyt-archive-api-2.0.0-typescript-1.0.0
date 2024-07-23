import { z } from "zod";

/**
 * The shape of the model inside the application code - what the users use
 */
export const person: any = z.lazy(() => {
  return z.object({
    firstname: z.string().optional().nullable(),
    middlename: z.string().optional().nullable(),
    lastname: z.string().optional().nullable(),
    qualifier: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
    organization: z.string().optional().nullable(),
    rank: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Person} person
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type Person = z.infer<typeof person>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const personResponse: any = z.lazy(() => {
  return z
    .object({
      firstname: z.string().optional().nullable(),
      middlename: z.string().optional().nullable(),
      lastname: z.string().optional().nullable(),
      qualifier: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      role: z.string().optional().nullable(),
      organization: z.string().optional().nullable(),
      rank: z.number().optional().nullable(),
    })
    .transform((data) => ({
      firstname: data["firstname"],
      middlename: data["middlename"],
      lastname: data["lastname"],
      qualifier: data["qualifier"],
      title: data["title"],
      role: data["role"],
      organization: data["organization"],
      rank: data["rank"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const personRequest: any = z.lazy(() => {
  return z
    .object({
      firstname: z.string().nullish(),
      middlename: z.string().nullish(),
      lastname: z.string().nullish(),
      qualifier: z.string().nullish(),
      title: z.string().nullish(),
      role: z.string().nullish(),
      organization: z.string().nullish(),
      rank: z.number().nullish(),
    })
    .transform((data) => ({
      firstname: data["firstname"],
      middlename: data["middlename"],
      lastname: data["lastname"],
      qualifier: data["qualifier"],
      title: data["title"],
      role: data["role"],
      organization: data["organization"],
      rank: data["rank"],
    }));
});
