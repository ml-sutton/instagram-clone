import TheAlgorithm from "@/actions/TheAlgorithm";

export default async function Feed() {
  const posts = await TheAlgorithm();
  return (
    <div className=""> This would be the feed</div>
  )
}
