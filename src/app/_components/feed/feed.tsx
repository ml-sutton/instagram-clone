import TheAlgorithm, { FeedPost } from "@/actions/TheAlgorithm";
import FeedPostComponent from "./feedPost";

export default async function Feed() {
  const posts: FeedPost[] = await TheAlgorithm();
  return (
    <div className="">
      {
        posts.map((item) => (<FeedPostComponent post={item} key={item.post.id} />))
      }
    </div>
  )
}
