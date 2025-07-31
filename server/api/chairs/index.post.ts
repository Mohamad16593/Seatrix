//Add new Chair to The DB

import { getDb } from "~/utilis/db";
import { chairSchema } from "~/utilis/chairSchema";
import { treeifyError } from "zod";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const result = chairSchema.safeParse(body);
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
  const insert = await db.collection("chairs").insertOne(result.data);
  return {
    status: "success",
    insertedId: insert.insertedId,
  };
});
