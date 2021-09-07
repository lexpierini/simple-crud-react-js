// Main Imports
import React from "react";
import { Switch, Route, Redirect } from "react-router";

// Components Imports
import Employe from "../components/employee/Employe";
import Help from "../components/help/Help";

// Main
export default (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Employe} />
      <Route path="/aide" component={Help} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
