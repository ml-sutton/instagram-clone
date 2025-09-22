import { InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const Profile = pgTable("profile", {
  id: text("user_id").primaryKey(),
  username: text("user_username").notNull().unique(),
  description: text("user_description"),
  profileImage: text("user_image").notNull(),
  createdOn: timestamp("user_created_on").notNull().defaultNow(),
  updatedAt: timestamp("user_updated_at").notNull().defaultNow(),
})
export const Post = pgTable("post", {
  id: serial("post_id").primaryKey(),
  imageURL: text("post_image_url").notNull(),
  createdOn: timestamp("user_created_on").notNull().defaultNow(),
  updatedAt: timestamp("user_updated_at").notNull().defaultNow(),
  user_id: text("user_id").references(() => Profile.id)
})

export type ProfileType = InferSelectModel<typeof Profile>;
export type PostType = InferSelectModel<typeof Post>;
