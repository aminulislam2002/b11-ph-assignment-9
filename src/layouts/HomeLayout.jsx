import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[68px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeLayout;
