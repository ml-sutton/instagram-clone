"use client"
import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { CreateProfileOnDB } from "@/actions/createProfileOnDB"
import { goToHome } from "@/actions/goToHome"
interface CreateProfilePropTypes {
  user_id: string
}




const CreateProfile: React.FC<CreateProfilePropTypes> = ({ user_id }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const [username, setUsername] = useState<string>(isLoaded ? user?.username! : "");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<"username_taken" | "insert_failed" | null>(null);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CreateProfileOnDB(user_id, username, description, user?.imageUrl!).then(value => {
      if (value.success) {
        return
      }
      else {
        setError(value.reason);
      }
    });

  }
  if (!isSignedIn || user.id !== user_id) {
    goToHome().then();
  }
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          placeholder="Description"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        {error}
        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateProfile
