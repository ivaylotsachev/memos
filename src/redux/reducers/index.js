import { combineReducers } from "redux";
import appReducer from "./appReducer";
import formReducer from "./formReducer";
import postsReducers from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    users: usersReducer,
    posts: postsReducers,
    form: formReducer,
    app: appReducer,
});
