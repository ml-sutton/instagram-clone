"use server";
import "server-only"

import { db } from "@/db/drizzle";
import { Profile } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
type CreateProfileResult =
  | { success: true; }
  | { success: false; reason: "username_taken" | "insert_failed" };



export const CreateProfileOnDB = async (user_id: string, user_name: string, user_description: string, user_image: string): Promise<CreateProfileResult> => {
  const username_taken = await db.select().from(Profile).where(eq(Profile.username, user_name));
  if (username_taken.length > 0)
    return { success: false, reason: "username_taken" }
  await db.insert(Profile).values({
    id: user_id,
    username: user_name,
    description: user_description,
    profileImage: user_image
  });
  const didUpload = await db.select().from(Profile).where(eq(Profile.id, user_id));
  if (didUpload.length < 1)
    return { success: false, reason: "insert_failed" }
  else {
    revalidatePath(`/profile/${user_id}`);
    return { success: true }
  }
}
