import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import clientPromise from ".";
import { dummyBlogs, dummyTags } from "./dummy-data";

let client: MongoClient;
let db: Db;
let blogs: Collection;
let tags: Collection;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db(process.env.MONGODB_DATABASE_NAME);
    blogs = db.collection('blog');
    tags = db.collection('tag')
  } catch(err) {
    throw new Error('Failed to stablish connection to database');
  }
}

async function insertBlogDocuments(){
  try {
    if (!blogs) await init();
    await blogs.insertMany(dummyBlogs)
  } catch(err) {
    throw new Error('Failed to create Blogs')
  }
}
async function insertTagDocuments(){
  try {
    if (!blogs) await init();
    await tags.insertMany(dummyTags)
  } catch(err) {
    throw new Error('Failed to create Tags')
  }
}

;(async () => {
  await init();
  // await insertBlogDocuments();
  // await insertTagDocuments();
})();

export async function getBlog(id: string){
  try {
    if(!blogs) await init();
    let result = await blogs.findOne({ _id: new ObjectId(id) });
    if (result) {
      return { ...result, _id: result?._id.toString()}
    }
    return null
  } catch(err) {
    throw new Error("Failed to get blog");
  }
}

export async function getBlogs({ limit=20, offset=0, tag=undefined }: { limit?: number, offset?: number, tag?: string | string[]}) {
  try {
    if (!blogs) await init();
    let query = {};
    if (tag && typeof tag === "string" && tag.length) {
      query = { tags: { $in: [tag] }};
    }
    if (tag && typeof tag === "object" && tag.length) {
      query = { tags: { $in: tag }};
    }
    const result = await blogs.find(query).limit(limit).skip(offset).map((blog) => ({ ...blog, _id: blog._id.toString() })).toArray();
    return { blogs: result }
  } catch(err) {
    throw new Error('Failed to fetch Blogs')
  }
}

export async function getTags() {
  try {
    if (!tags) await init();
    const result = await tags.find({}).map((tag) => ({ ...tag, _id: tag._id.toString() })).toArray();
    return { tags: result }
  } catch(err) {
    throw new Error('Failed to fetch Tags');
  }
}