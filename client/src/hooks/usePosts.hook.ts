import {useEffect, useReducer} from "react";
import {postReducer} from "../reducer/posts.reducer.ts";
import {defaultState} from "../states/posts.state.ts";
import {PostsEvent} from "../events/posts.event.ts";
import {Post} from "../model/post.model.ts";

export const useGetPosts = () => {
    const [state, dispatch] = useReducer(postReducer, defaultState);
    
    useEffect( () => {
        const fetchPost = async () => {
            dispatch({type: PostsEvent.LOAD_DATA});

            const response = await fetch('http://localhost:3000/api/posts');
            const posts = await response.json() as Post[]
            dispatch({type: PostsEvent.LOAD_DATA_ENDED, payload: posts})

        }
        
        fetchPost();
    }, []);

    return {
        posts: state
    }
}
