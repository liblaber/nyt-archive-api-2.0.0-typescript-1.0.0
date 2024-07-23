import { z } from "zod";
import { response, responseRequest, responseResponse } from "./response";

/**
 * The shape of the model inside the application code - what the users use
 */
export const getByYearMonthJsonOkResponse: any = z.lazy(() => {
  return z.object({
    copyright: z.string().optional().nullable(),
    response: response.optional().nullable(),
  });
});

/**
 *
 * @typedef  {GetByYearMonthJsonOkResponse} getByYearMonthJsonOkResponse
 * @property {string}
 * @property {Response}
 */
export type GetByYearMonthJsonOkResponse = z.infer<
  typeof getByYearMonthJsonOkResponse
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getByYearMonthJsonOkResponseResponse: any = z.lazy(() => {
  return z
    .object({
      copyright: z.string().optional().nullable(),
      response: responseResponse.optional().nullable(),
    })
    .transform((data) => ({
      copyright: data["copyright"],
      response: data["response"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getByYearMonthJsonOkResponseRequest: any = z.lazy(() => {
  return z
    .object({
      copyright: z.string().nullish(),
      response: responseRequest.nullish(),
    })
    .transform((data) => ({
      copyright: data["copyright"],
      response: data["response"],
    }));
});
