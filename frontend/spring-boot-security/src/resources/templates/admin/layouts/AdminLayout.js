import { Routes, Route } from "react-router-dom";

import HeaderFragment from "../fragments/HeaderFragment.js";
import FooterFragment from "../fragments/FooterFragment.js";
import AccountsBody from "../bodys/account/AccountsBody.js";
import RolesBody from "../bodys/role/RolesBody.js";
import NotFound from "../../error/bodys/404.js";
import RoleInsert from "../../admin/bodys/role/RoleInsertBody.js"

function MainLayout() {
  // {`/role/page/:currentPage?sizePage=:sizePage?sortField=:soetField&sortDir=:sortDir&keyword=:keyword`}
  return (
    <>
      <HeaderFragment />
      <Routes>
        <Route exact path="/accounts" element={<AccountsBody />}></Route>
        <Route path="/roles" element={<RolesBody />}></Route>
        <Route path={`/roles/page/2?sizePage=4&sortField=undefined&sortDir=asc&keyword=`} element={<RoleInsert />}></Route>
        <Route path="/add" element={<RoleInsert />}></Route>
        <Route path={`/role/:idRole`} element={<RoleInsert />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <FooterFragment />
    </>
  );
}

export default MainLayout;
