import { fbGetAllPosts } from "../../utils/firebase/posts";
import * as types from "../types";

export const setPosts = (payload) => ({
    type: types.SET_POSTS,
    payload,
});

export const setLatestPosts = (payload) => ({
    type: types.SET_LATEST_POSTS,
    payload,
});

// async actions
export const fetchPosts = (post) => {
    return async (dispatch) => {
        await fbGetAllPosts().then((posts) => {
            console.log("postsAction fetchPosts: posts fetched", posts);
            posts.length && dispatch(setPosts(posts));
        });
    };
};
