import { getBlogs } from "@/lib/mongo/blogs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const data = await getBlogs({ tag: searchParams.getAll('tag') || undefined, limit: Number.parseInt(searchParams.get('limit')|| '20')  });
  return NextResponse.json({ data })
}