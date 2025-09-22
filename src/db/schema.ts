import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const Profile = pgTable("profile", {
  id: text("user_id").primaryKey(),
  username: text("user_username").notNull().unique(),
  description: text("user_description"),
  createdOn: timestamp("user_created_on").notNull().defaultNow(),
  updatedAt: timestamp("user_updated_at").notNull().defaultNow(),
})
export const Post = pgTable("post", {

})
export const Like = pgTable("like", {

})
export const Comment = pgTable("comment", {

})
