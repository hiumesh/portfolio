import { getTags } from "@/lib/mongo/blogs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await getTags();
  return NextResponse.json({ data })
}