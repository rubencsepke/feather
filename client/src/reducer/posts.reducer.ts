import {PostsState} from "../states/posts.state.ts";
import {PostsEvent, PostsEventAction} from "../events/posts.event.ts";

export const postReducer = (state: PostsState, action: PostsEventAction): PostsState => {
    switch(action.type) {
        case PostsEvent.LOAD_DATA: 
            return {
                ...state,
                isLoading: true,
            };
        case PostsEvent.LOAD_DATA_ENDED: 
            return {
                ...state,
                isLoading: false,
                data: action.payload ?? [],
            };
        case PostsEvent.ERROR: 
            return {
                ...state,
                isLoading: false,
                error: true
            };
    }
}