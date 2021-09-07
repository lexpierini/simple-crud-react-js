// Main Imports
import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import logo from "../../assets/img/logo_alex_72dpi.png";

// Material-UI customization
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 90,
  },
  img: {
    maxWidth: "255px",
    maxHeight: 80,
  },
}));

// Main
export default (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={logo} alt="Logo" className={classes.img} />
    </Box>
  );
};
