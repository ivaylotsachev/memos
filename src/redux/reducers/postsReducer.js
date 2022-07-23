import * as types from "../types";

const initialState = {
    posts: [],
    latestPosts: [],
};

const postsReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.SET_POSTS:
            return { ...state, posts: payload };
        case types.SET_LATEST_POSTS:
            return { ...state, latestPosts: payload };
        default:
            return state;
    }
};

export default postsReducers;
