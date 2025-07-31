// Get Existing Chair From The DB By its ID

import { getDb } from "~/utilis/db";
import { ObjectId } from "mongodb";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const db = await getDb();
  const chair = await db
    .collection("chairs")
    .findOne({ _id: new ObjectId(id) });
  return chair;
});
