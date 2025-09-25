import { GetAllPostsByUser } from "@/actions/getAllPostsByUser";
import ProfileNoImages from "./profileNoImages";
import ProfileImageFeed from "./profileImageFeed";
interface ProfileImageViewPropTypes {
  user_id: string
}

export default async function ProfileImageView({ user_id }: ProfileImageViewPropTypes) {
  const profileImages = await GetAllPostsByUser(user_id);
  return (
    <div className="pt-4 border-x-2 min-w-1/2 flex items-center justify-center border-b-2 pb-8 px-4 flex-col">
      {profileImages.length === 0 ? <ProfileNoImages /> : <ProfileImageFeed images={profileImages} />}
    </div>
  )

}
