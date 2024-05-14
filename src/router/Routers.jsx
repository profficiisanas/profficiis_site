import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/home';
import Login from "../components/auth/Login";
import Activities from "../components/activities/Activities"; 
import BlogPage from "../components/blog/blog"; 
import Register from "../components/auth/Register";
import OffresDemploiPage from "../components/OffresDemploi/OffresDemploiPage";
import ContactPage from "../pages/contact";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/activities' element={<Activities />} /> 
            <Route path='/OffresDemploi' element={<OffresDemploiPage />} /> 
            <Route path='/blog' element={<BlogPage />} /> 
            <Route path='/contact' element={<ContactPage />} /> 
        </Routes>
    );
};

export default Routers;
