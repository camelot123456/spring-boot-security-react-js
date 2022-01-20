import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderFragment from "../fragments/HeaderFragment.js";
import SidebarFragment from "../fragments/SidebarFragment.js";
import DashboardBodys from "../bodys/DashboardBodys.js";
import FooterFragment from "../fragments/FooterFragment.js";

function AdminLayout() {
  return (
    <div className="sb-nav-fixed">
      <HeaderFragment />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <SidebarFragment />
        </div>
        <div id="layoutSidenav_content">
          <DashboardBodys />
          <FooterFragment />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
