import * as types from '../types';

const initialState = {
    users: [],
    activeUser: null,
    usernameError: false,
    registerError: '',
}

const usersReducer = (state = initialState, action) => {
    const { payload } = action;

    switch(action.type) {
        case types.SET_ACTIVE_USER:
            return { ...state, user: payload === null ? null : {...state.activeUser, ...payload}}
        case types.SET_REGISTER_ERROR:
            return { ...state, registerError: payload.split("Firebase: ")[1]}
        default:
            return state;
    }
}

export default usersReducer;