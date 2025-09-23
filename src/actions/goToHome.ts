"use server"
import "server-only"
import { redirect } from "next/navigation"

export const goToHome = async () => {
  redirect("/")
}
