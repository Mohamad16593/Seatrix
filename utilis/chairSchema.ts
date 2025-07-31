import { z } from "zod";

export const chairSchema = z.object({
  title: z.string().min(10, "Title Must Be At Least 10 Characters"),
  description: z.string().min(10, "Description Must Be At Least 10 Characters"),
  dimensions: z
    .string()
    .regex(/^\d+x\d+x\d+ cm$/, "Dimensions must be in format 'WxDxH cm'"),
  price_usd: z.number().min(0),
  weight_kg: z.number().min(0),
  rating: z.number().min(0).max(5),
  image_url: z.string().url(),
  category: z.string().min(3),
});
export type Chair = z.infer<typeof chairSchema>;
export const chairEditSchema = chairSchema.partial();
