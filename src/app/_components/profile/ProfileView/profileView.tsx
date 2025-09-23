import { ProfileType } from "@/db/schema"
import Image from "next/image";
import ProfileImageView from "./profileImageView";
interface ProfileViewPropTypes {
  Profile: ProfileType
}

export default function ProfileView({ Profile }: ProfileViewPropTypes) {
  return (
    <section className="w-screen flex items-center flex-col">
      <div className="flex gap-16 md:min-w-1/2 pr-32 border-x-2 border-b-2 border-slate-950 dark:border-slate-100 py-6 px-8">
        <Image
          src={Profile.profileImage}
          alt={"Profile image"}
          height={250}
          width={250}
          className="rounded-full border-2 border-slate-950 dark:border-slate-100"
        />
        <div className="flex flex-col gap-10 py-10">
          <h1 className="text-4xl font-bold">{Profile.username}</h1>
          <h2>{Profile.description}</h2>
        </div>
      </div>
      <ProfileImageView user_id={Profile.id} />

    </section>
  )
}
