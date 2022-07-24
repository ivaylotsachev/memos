import * as types from "../types";

const initialState = {
    usernameError: false,
    emailError: false,
    registerError: "",
    loginError: "",
};

const formReducer = (state = initialState, action) => {
    const { type, payload } = action;

    console.log("emailreducer", payload);

    switch (type) {
        case types.SET_NAME_ERROR:
            return { ...state, usernameError: payload };
        case types.SET_EMAIL_ERROR:
            return { ...state, emailError: payload };
        case types.SET_REGISTER_ERROR:
            return { ...state, registerError: payload };
        case types.SET_LOGIN_ERROR:
            return { ...state, loginError: payload };
        default:
            return state;
    }
};

export default formReducer;
