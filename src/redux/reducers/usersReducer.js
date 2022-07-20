import * as types from '../types';

const initialState = {
    users: [],
    user: {},
}

const usersReducer = (state = initialState, action) => {
    const { payload } = action;

    switch(action.type) {
        case types.SET_USER:
            return { ...state, user: payload }
        default:
            return state;
    }
}

export default usersReducer;