"use server"

import { redirect } from "next/navigation"

export const goToHome = async () => {
  redirect("/")
}
