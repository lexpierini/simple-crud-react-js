// MAIN IMPORTS
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";

// COMPONENTS IMPORTS
import Logo from "../components/templates/Logo";
import Menu from "../components/templates/Menu";
import Routes from "../routes/Routes";
import Header from "../components/templates/Header";

// MATERIAL-UI IMPORTS
import Grid from "@material-ui/core/Grid";

// MATERIAL-UI CUSTOMIZATION
const useStyles = makeStyles(() => ({
  root: {
    background: "#F7F8FC",
  },
}));

// MAIN
export default (props) => {
  const classes = useStyles();

  // THEME CUSTOMIZATION
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#5482A2",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#F89923",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#F7F8FC",
        formField: "#F6F6F6",
      },
    },
  });

  // MAIN BODY
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Grid container className={classes.root}>
          <Grid item xs={3} sm={4} md={3} lg={2} xl={2}>
            <Grid container direction="column">
              <Grid item id="gridLogo" xs={12}>
                <Logo />
              </Grid>
              <Grid item id="gridMenu" xs={12}>
                <Menu />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={9} sm={8} md={9} lg={10} xl={10}>
            <Grid container direction="column">
              <Header />
              <Routes />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
};
