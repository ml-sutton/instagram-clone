import "server-only"
import { db } from "@/db/drizzle";
import { Profile } from "@/db/schema";
import { eq } from "drizzle-orm";
export const DoesExist = async (user_id: string) => {
  try {
    const profile = await db.select().from(Profile).where(eq(Profile.id, user_id));
    if (profile.length > 0) {
      return { success: true, profile: profile[0] }
    }
    return { success: false }
  } catch (error) {
    return { success: false, error: error }
  }
}
