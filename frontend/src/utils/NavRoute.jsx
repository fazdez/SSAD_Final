import React from "react";
import NavBar from "./../utils/NavBar";
import { Route } from "react-router-dom";

const NavRoute = ({ path, component: Component }) => {
  return (
    <React.Fragment>
      <NavBar />
      <Route path={path} component={Component}></Route>
    </React.Fragment>
  );
};
export default NavRoute;
