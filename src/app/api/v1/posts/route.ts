import { NextResponse } from "next/server";
import { listPosts, createPost } from "@/core/models/post";

export async function GET() {
  const posts = await listPosts();
  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content } = body;
  if (!title) return NextResponse.json({ error: "Title required" }, { status: 400 });
  const post = await createPost({ title, content });
  return NextResponse.json({ post });
}
