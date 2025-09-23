import Link from "next/link"

const ProfileNoImages = () => (<div className="flex flex-col items-center"><p>You have not yet made any posts yet</p><Link href="/posts/create">Create one!</Link></div>)


export default ProfileNoImages
