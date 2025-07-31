import { getDb } from "~/utilis/db";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const category = query.category;

  if (!category) {
    return {
      error: "Missing 'category' query parameter",
    };
  }

  const db = await getDb();
  const chairs = await db.collection("chairs").find({ category }).toArray();

  return chairs;
});
