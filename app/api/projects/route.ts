import { getProjects } from "@/lib/mongo/blogs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await getProjects();
  return NextResponse.json({ data })
}