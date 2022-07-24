import * as types from "../types";

export const setUsernameError = (payload) => ({
    type: types.SET_NAME_ERROR,
    payload,
});

export const setEmailError = (payload) => ({
    type: types.SET_EMAIL_ERROR,
    payload,
});
