import {Post} from "../model/post.model.ts";

export const PostsEvent = {
    LOAD_DATA: 'loadDataEvent',
    LOAD_DATA_ENDED: 'loadDataEndedEvent',
    ERROR: 'errorEvent',
} as const

export type PostsEvents = (typeof PostsEvent)[keyof typeof PostsEvent]

export type PostsEventAction = {
    type: PostsEvents,
    payload?: Post[];
}