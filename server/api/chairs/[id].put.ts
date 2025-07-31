// Edit Existing Chair in The DB using its ID

import { getDb } from "~/utilis/db";
import { ObjectId } from "mongodb";
import { chairEditSchema } from "~/utilis/chairSchema";
import { treeifyError } from "zod";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  const result = chairEditSchema.safeParse(body);

  if (!result.success) {
    const tree = treeifyError(result.error);
    const properties = tree.properties as Record<string, { errors?: string[] }>;

    const errors = Object.fromEntries(
      Object.entries(properties).map(([key, val]) => [
        key,
        val.errors?.[0] ?? "Invalid",
      ])
    );

    return { error: "Validation Failed", details: errors };
  }

  const db = await getDb();
  await db
    .collection("chairs")
    .updateOne({ _id: new ObjectId(id) }, { $set: result.data });
  return { status: "success" };
});
