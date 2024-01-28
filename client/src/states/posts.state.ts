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
            post_author: {
                username: ''
            },
            likes: 0,
            date: new Date('1999-12-31T23:00:00.000+00:00')
        }
    ],
    error: false
}