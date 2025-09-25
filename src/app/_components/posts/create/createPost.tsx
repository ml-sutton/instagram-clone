"use client"

import { UploadButton } from "@/app/_components/uploadthing/uploadThing";

export default function CreatePost() {
  return (
    <div className="">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  )
}
