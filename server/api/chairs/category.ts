import { getDb } from "~/utilis/db";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const category = query.category;
  try {
    const db = await getDb();
    const chairs = await db.collection("chairs").find({ category }).toArray();
    return chairs;
  } catch (err) {
    console.error("API error:", err);
    return createError({
      statusCode: 500,
      statusMessage: "Failed to fetch chairs",
    });
  console.log("Mongo URI:", process.env.NUXT_MONGODB_URI);
console.log("DB Name:", process.env.NUXT_MONGODB_DB);  
  }
  
});

