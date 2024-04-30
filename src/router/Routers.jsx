import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/home';
import Login from "../components/login/login";
import Activities from "../components/activities/Activities"; 
import BlogPage from "../components/blog/blog"; 

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/activities' element={<Activities />} /> 
            <Route path='/blog' element={<BlogPage />} /> 
        </Routes>
    );
};

export default Routers;
