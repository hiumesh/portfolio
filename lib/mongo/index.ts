import { MongoClient } from "mongodb";

const URL = process.env.MONGODB_URL;
const options = {};

if (!URL) throw new Error("Please add your Mongo URL to .env");

let client = new MongoClient(URL, options);
let clientPromise: Promise<MongoClient>;

if(process.env.NODE_ENV !== "production") {
  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect();
  }

  clientPromise = (global as any)._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
