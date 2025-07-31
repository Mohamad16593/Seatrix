import { getDb } from "~/utilis/db";
import { getQuery } from "#imports";

export default defineEventHandler(async (event) => {
  const { title } = getQuery(event);
  const db = await getDb();
  const filter = title ? { title: { $regex: title, $options: "i" } } : {}; //Case insensetive
  const results = await db.collection("chairs").find(filter).toArray();
  return results;
});

//example: GET /api/chairs/search?title=mesh
