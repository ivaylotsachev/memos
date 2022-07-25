import * as types from "../types";

const initialState = {
    loader: { isActive: true, text: "" },
};

const appReducer = (state = initialState, action) => {
    const { type, payload } = action;

    console.log("appreducer", payload);

    switch (type) {
        case types.SET_LOADER:
            return { ...state, loader: payload };
        default:
            return state;
    }
};

export default appReducer;
