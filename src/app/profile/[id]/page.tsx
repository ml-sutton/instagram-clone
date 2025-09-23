import { DoesExist } from "@/actions/DoesExist"
import CreateProfile from "@/app/_components/profile/CreateProfile/createProfile"
import ProfileView from "@/app/_components/profile/ProfileView/profileView"
import { db } from "@/db/drizzle"
import { Profile } from "@/db/schema"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"

interface ProfilePageProps {
  params: {
    id: string
  }
}



export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = params
  const profileData = await DoesExist(id);
  const authStatus = (await auth()).userId;
  return (
    <main>
      {(!!profileData.success && !!profileData.profile) && <div><ProfileView Profile={profileData.profile} /></div>}
      {(!profileData.success && authStatus === id) && <div><CreateProfile user_id={id} /></div>}
    </main>
  )
}
