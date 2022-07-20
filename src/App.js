import { Routes, Route } from 'react-router-dom';
// components
import { Header, Home, Register } from './components';

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </>
    );
}

export default App;
