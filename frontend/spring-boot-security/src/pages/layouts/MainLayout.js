import React from "react";
import {Link, Routes, Route} from 'react-router-dom'

import HomePage from "../bodys/home/HomePage";
import RolePage from "../bodys/role/RolePage"
import Error404Page from "../bodys/error/Error404Page"
import RoleCreatePage from "../bodys/role/RoleCreatePage"

import Footer from "../fragments/Footer";
import Header from "../fragments/Header";


const MainLayout = () => {

    return (
        <>
            <Header />
            <div className="container my-4">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/home" element={<HomePage />}></Route>
                <Route path="/roles" element={<RolePage />}></Route>
                <Route path="/role/add" element={<RoleCreatePage />}></Route>
                <Route path="/role/:idRole" element={<RoleCreatePage />}></Route>
                <Route path="*" element={<Error404Page />}></Route>
            </Routes>
            </div>
            <Footer />
        </>
    )

}

export default MainLayout;