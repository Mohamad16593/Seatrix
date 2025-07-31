//Connect to the DB

import { MongoClient, Db } from "mongodb";
const uri = process.env.NUXT_MONGODB_URI!;
const client = new MongoClient(uri);


let cachedDb: Db | null = null;

export async function getDb() {
  if (!cachedDb) {
    await client.connect("chairs_db");
    cachedDb = client.db(" chairs_db");
  }
  return cachedDb;
}
