import React from "react";
import BlogNavbar from "./BlogNavbar";

const layout = ({ children }) => {
  return (
    <>
      <BlogNavbar />

      {children}
    </>
  );
};

export default layout;
