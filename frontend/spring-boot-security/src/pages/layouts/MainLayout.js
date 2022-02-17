import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../bodys/home/HomePage";
import Error404Page from "../bodys/error/Error404Page";
import RoleCreateUpdatePage from "../bodys/role/RoleCreateUpdatePage";

import Footer from "../fragments/Footer";
import Header from "../fragments/Header";
import LoginPage from "../bodys/security/LoginPage";

const RolePage = React.lazy(() => import("../bodys/role/RolePage"));

const MainLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="hstack gap-3 d-flex justify-content-center mt-5">
          <div
            className="spinner-grow text-danger"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>

          <div
            className="spinner-grow text-warning"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>

          <div
            className="spinner-grow text-success"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Header />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/roles" element={<RolePage />}></Route>
          <Route path="/role/add" element={<RoleCreateUpdatePage />}></Route>
          <Route
            path="/role/:idRole"
            element={<RoleCreateUpdatePage />}
          ></Route>

          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<Error404Page />}></Route>
        </Routes>
      </div>
      <Footer />
    </Suspense>
  );
};

export default MainLayout;
