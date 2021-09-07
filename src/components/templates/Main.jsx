// Main Imports
import React from "react";

// Components Imports
import Header from "./Header";

// Main
export default (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      {props.children}
    </React.Fragment>
  );
};
