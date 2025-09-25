import { PostType } from "@/db/schema"
import Image from "next/image"
interface ProfileImageFeedPropTypes {
  images: PostType[]
}

export default async function ProfileImageFeed({ images }: ProfileImageFeedPropTypes) {
  return (
    <div className="grid">
      {images.map((item) => (<Image alt="hello world" key={item.id} src={item.imageURL} width={250} height={250} />))}
    </div>
  )
}
