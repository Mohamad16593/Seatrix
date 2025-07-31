// Delete Existing Chair From The DB

import { getDb } from "~/utilis/db";
import { ObjectId } from "mongodb";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const updated = await readBody(event);
  const db = await getDb();
  await db.collection("chairs").deleteOne({ _id: new ObjectId(id) });
  return { status: "deleted" };
});
