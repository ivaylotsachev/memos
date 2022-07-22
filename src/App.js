import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from  "./redux/actions/usersAction";
// components
import { CreatePost, Header, Home, Login, Register } from './components';
import { auth } from './firebase';

function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("app user", user);
            user && dispatch(setUser(user))
        });
    }, [])

    return (
        <>
            <Header/>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/create-post' element={<CreatePost/>}/>
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
