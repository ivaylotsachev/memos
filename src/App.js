import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
// components
import { Header, Home, Login, Register } from './components';

function App() {
    const location = useLocation();

    return (
        <>
            <Header/>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
