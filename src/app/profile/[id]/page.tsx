import CreateProfile from "@/app/_components/profile/CreateProfile/createProfile"
import { db } from "@/db/drizzle"
import { Profile } from "@/db/schema"
import { eq } from "drizzle-orm"

interface ProfilePageProps {
  params: {
    id: string
  }
}

const DoesExist = async (user_id: string) => {
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


export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = params
  const profileData = await DoesExist(id);

  return (
    <main>
      {!!profileData.success && <div>{profileData.profile?.username}</div>}
      {!profileData.success && <div><CreateProfile user_id={id} /></div>}
    </main>
  )
}
