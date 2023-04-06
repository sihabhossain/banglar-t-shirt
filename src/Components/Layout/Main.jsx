import React from "react";
import Home from "../Home/Home";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Main;
