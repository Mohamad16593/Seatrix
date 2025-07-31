// Get all Existing Chairs From The DB
import { getDb } from "~/utilis/db";

export default defineEventHandler(async () => {
  const db = await getDb();
  const chairs = await db.collection("chairs").find().toArray();
  return chairs;
});
