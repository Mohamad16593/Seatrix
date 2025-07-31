//Connect to the DB

import { MongoClient, Db } from "mongodb";
const uri = process.env.NUXT_MONGODB_URI!;
const client = new MongoClient(uri);
const dbName = process.env.NUXT_MONGODB_DB!;

let cachedDb: Db | null = null;

export async function getDb() {
  if (!cachedDb) {
    await client.connect();
    cachedDb = client.db(dbName);
  }
  return cachedDb;
}
