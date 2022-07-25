import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/actions/usersAction";
// components
import {
    CreatePost,
    Header,
    Home,
    Login,
    Register,
    UserPosts,
    Loader,
} from "./components";
import { auth } from "./firebase";
import { subscribeToPosts } from "./redux/actions/postsAction";
import { setLoader } from "./redux/actions/appAction";

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            user && dispatch(setUser(user));
        });

        dispatch(subscribeToPosts());
    }, []);

    useEffect(() => {
        posts.length && dispatch(setLoader({ isActive: false, text: "" }));
    }, [posts]);

    return (
        <>
            <Header />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/create-post' element={<CreatePost />} />
                    <Route path='/user-posts' element={<UserPosts />} />
                </Routes>
            </AnimatePresence>
            <Loader />
        </>
    );
}

export default App;
