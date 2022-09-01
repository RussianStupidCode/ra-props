import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/common/navbar/navbar";
import { ROUTER_PATH } from "../helpers/path";

function MainLayout() {
  const navbarItems = [
    { title: "Films (Task 1)", link: ROUTER_PATH.films },
    { title: "Listing (Task 2)", link: ROUTER_PATH.listing },
  ];

  return (
    <div>
      <NavBar menuList={navbarItems} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
