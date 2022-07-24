import * as types from "../types";

const initialState = {
    users: [],
    activeUser: null,
};

const usersReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case types.SET_ACTIVE_USER:
            return {
                ...state,
                user:
                    payload === null
                        ? null
                        : { ...state.activeUser, ...payload },
            };
        default:
            return state;
    }
};

export default usersReducer;
