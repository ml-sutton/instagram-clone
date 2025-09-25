import { PostCard } from "@/app/_components/posts/postcard";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CreatePostPage() {
  const authStatus = await auth();
  const userID = authStatus.userId;
  if (!authStatus.isAuthenticated)
    redirect("/");

  return (
    <div className="">
      <PostCard />
    </div>
  )
}
