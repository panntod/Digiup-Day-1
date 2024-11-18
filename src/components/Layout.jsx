import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-12 mx-8">{children}</main>
    </>
  );
};

export default Layout;
