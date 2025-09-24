"use client"

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"


export default function Header() {
  const currentPath = usePathname();
  const isInRoot = currentPath === "/";
  const { isSignedIn, user } = useUser();
  return (
    <header className="w-screen flex items-center justify-center py-4 px-6 md:px-16 bg-slate-300 dark:bg-slate-900 text-slate-950 dark:text-slate-100">
      <div className="mr-auto">{!isInRoot && <Link href="/">Back</Link>}</div>
      <h1 className="text-4xl italic">Postify</h1>
      <div className="ml-auto  flex flex-row gap-2 justify-center items-center">
        <Link href="/posts/create">
          Create a post
        </Link>
        <div className="">
          {!!isSignedIn && <Link href={`/profile/${user.id}`}>
            <Image src={user.imageUrl} alt="profile image" width={50} height={50} className="rounded-full border-2 border-slate-950 dark:border-slate-100" />
          </Link>}
        </div>
      </div>

    </header>
  )
}
