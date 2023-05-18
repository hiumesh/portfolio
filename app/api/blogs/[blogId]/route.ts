import { NextResponse } from "next/server";
import { getBlog } from "@/lib/mongo/blogs";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { blogId: string };
  },
) {
  const id = params.blogId;
  const data = await getBlog(id);
  return NextResponse.json({ data });
}