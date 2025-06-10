import { z } from 'zod';

export const GetUserExportDataResponseSchema = z.object({
  success: z.boolean(),
  data: z.string(),
});

export const QueryParamsSchema = z.object({}).optional();

export type GetUserExportDataResponse = z.infer<
  typeof GetUserExportDataResponseSchema
>;
export type QueryParams = z.infer<typeof QueryParamsSchema>;
