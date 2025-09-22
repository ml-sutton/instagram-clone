import { db } from "@/db/drizzle"
import { Profile } from "@/db/schema"
import { eq } from "drizzle-orm"

interface ProfilePageProps {
  params: {
    id: string
  }
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = params
  // const profile = db.select().from(Profile).where(eq(Profile.id,user_id))
  return (
    <main>
      {id}
    </main>
  )
}
