import { prisma } from "~/lib/prisma";

export async function createPost({ title, content }: { title: string; content: string }) {
  const slug = title.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
  const post = await prisma.post.create({
    data: { title, content, slug },
  });
  return post;
}

export async function listPosts() {
  return prisma.post.findMany({ orderBy: { createdAt: "desc" } });
}
