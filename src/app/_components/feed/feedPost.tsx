import { FeedPost } from "@/actions/TheAlgorithm";
import Image from "next/image";
import Link from "next/link";

interface FeedPostPropTypes {
  post: FeedPost
}

export default function FeedPostComponent({ post }: FeedPostPropTypes) {
  return (
    <div className="border-2">
      <div className="flex justify-start items-center gap-8 py-4 px-8 border-b-2">
        <Image
          className="rounded-full"
          src={post.profile?.profileImage!}
          alt={`${post.profile?.username}'s profile photo`}
          width={50}
          height={50} />
        <Link href={`/profile/${post.profile?.id!}`} className="text-4xl capitalize ">
          {post.profile?.username}
        </Link>
      </div>
      <Image src={post.post.imageURL} alt={`${post.profile?.username}'s post`} width={500} height={500} />
    </div>
  )
}
