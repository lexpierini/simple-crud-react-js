// Main Imports
import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Material-UI customization
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    height: 90,
  },
}));

// Main
export default (props) => {
  const classes = useStyles();

  return (
    <Grid item id="gridHeader" xs={12} className={classes.root}>
      <AppBar position="relative" elevation={0} className={classes.appBar}>
        <Typography color="primary" variant="h3">
          <Box mt={2} ml={4}>
            CONTRÔLE DES EMPLOYÉS
          </Box>
        </Typography>
      </AppBar>
    </Grid>
  );
};
