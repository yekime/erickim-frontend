import React from "react";
import "../../App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

export default function Demos() {
  return (
    <>
      <h1 className="demos">DEMOS</h1>
      <nav>
        <Link to="chess">Chess</Link>
        {/* <Link to="account">Account</Link> */}
      </nav>
      <Outlet />
    </>
  );
}
