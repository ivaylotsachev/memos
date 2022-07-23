import { fbGetAllPosts, fbGetLatestPosts } from "../../utils/firebase/posts";
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
export const fetchPosts = () => {
    return async (dispatch) => {
        await fbGetAllPosts().then((posts) => {
            console.log("postsAction fetchPosts:", posts);
            posts.length && dispatch(setPosts(posts));
        });
    };
};

// async actions
export const fetchLatestPosts = () => {
    return async (dispatch) => {
        await fbGetLatestPosts().then((posts) => {
            console.log("postsAction fetchLatest:", posts);
            posts.length && dispatch(setLatestPosts(posts));
        });
    };
};
