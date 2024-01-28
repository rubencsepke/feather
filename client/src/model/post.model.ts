import {User} from "./user.model.ts";

export interface Post {
  content: string,
  post_author: Partial<User>,
  likes: number,
  date: Date
}

