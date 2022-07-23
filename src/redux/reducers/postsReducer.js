import * as types from "../types";

const initialState = {
    posts: [],
};

const postsReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.SET_POSTS:
            return { ...state, posts: payload };
        default:
            return state;
    }
};

export default postsReducers;
