import React from "react";
import { NavBar } from "./index";

export default ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container">{children}</div>
    </div>
  );
};
