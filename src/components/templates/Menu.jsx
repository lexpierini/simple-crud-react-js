// Main Imports
import React from "react";
import { Link } from "react-router-dom";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import HelpIcon from "@material-ui/icons/Help";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Material-UI customization
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    borderTop: "solid 5px #FFFFFF",
    borderRight: "solid 5px #FFFFFF",
  },
  list: {
    marginTop: "20px",
    width: "100vh",
  },
  listItem: {
    "&:hover": {
      background: "linear-gradient(135deg, #f89820 0%, #ffffff 100%)",
      "& $listItemIcon": {
        color: "#FFFFFF",
      },
      "& $listItemText": {
        color: "#FFFFFF",
      },
    },
  },
  listItemIcon: {
    color: theme.palette.primary.main,
  },
  listItemText: {
    color: theme.palette.primary.main,
  },
}));

// Main
export default (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List component="nav" className={classes.list}>
        <ListItem button component={Link} to="/" className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Accueil" className={classes.listItemText} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/aide"
          className={classes.listItem}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Aide" className={classes.listItemText} />
        </ListItem>
      </List>
    </Box>
  );
};
