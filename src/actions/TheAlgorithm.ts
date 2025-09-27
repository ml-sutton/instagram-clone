import { db } from "@/db/drizzle"
import { Post, PostType, Profile, ProfileType } from "@/db/schema"
import { desc, eq } from "drizzle-orm"
import "server-only"
export type FeedPost = {
  post: PostType;
  profile: ProfileType | null
}
export default async function TheAlgorithm(): Promise<FeedPost[]> {
  const latest40 = await db.select()
    .from(Post)
    .leftJoin(Profile, eq(Post.user_id, Profile.id))
    .orderBy(desc(Post.createdOn))
    .limit(40);

  return latest40;

}

