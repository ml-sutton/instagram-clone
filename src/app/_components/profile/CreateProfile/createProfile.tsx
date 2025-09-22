"use client"
import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { CreateProfileOnDB } from "@/actions/createOnDB"
import { goToHome } from "@/actions/goToHome"
interface CreateProfilePropTypes {
  user_id: string
}




const CreateProfile: React.FC<CreateProfilePropTypes> = ({ user_id }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const [username, setUsername] = useState<string>(isLoaded ? user?.username! : "");
  const [description, setDescription] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CreateProfileOnDB(user_id, username, description, user?.imageUrl!).then(value => {
      value.success
    });

  }
  if (!isSignedIn || user.id !== user_id) {
    goToHome().then();
  }
  return (
    <div className="">
      <form onSubmit={onSubmit}>

      </form>
    </div>
  )
}

export default CreateProfile
