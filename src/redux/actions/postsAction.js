import {
    subscribeToPostsCollection,
    fbGetAllPosts,
} from "../../utils/firebase/posts";
import * as types from "../types";

export const setPosts = (payload) => ({
    type: types.SET_POSTS,
    payload,
});

// async actions
export const fetchPosts = (post) => {
    return async (dispatch) => {
        await subscribeToPostsCollection().then((posts) => {
            posts.length && dispatch(setPosts(posts));
        });
    };
};
