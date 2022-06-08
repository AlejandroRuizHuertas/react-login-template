import { Routes, Route, Navigate } from 'react-router-dom';
import { Main } from '../components/Main';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="main" element={<Main />} />
                    <Route path="/*" element={<><Navigate to="/main" /></>} />
                </Routes>
            </div>
        </>
    )
}