import "server-only"
import { db } from "@/db/drizzle"
import { Post, PostType } from "@/db/schema"
import { eq } from "drizzle-orm"
export const GetAllPostsByUser = async (user_id: string): Promise<PostType[]> => {
  const dbPosts = await db.select().from(Post).where(eq(Post.user_id, user_id));
  return dbPosts

}
