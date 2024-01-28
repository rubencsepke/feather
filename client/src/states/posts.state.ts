import {Post} from "../model/post.model.ts";

export interface PostsState {
    isLoading: boolean,
    data: Post[],
    error: boolean
}

export const defaultState: PostsState = {
    isLoading: false,
    data: [
        {
            content: '',
            post_author: 0
        }
    ],
    error: false
}