import { Routes, Route } from 'react-router-dom';
// components
import { Home, Register } from './components';

function App() {
    return (
        <>
            header here
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </>
    );
}

export default App;
