import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// import Main from "../templates/Main";

// const headerProps = {
//   title: "Aide",
//   subtitle: "Besoin d'aide? Ci-dessous, nous allons vous aider.",
// };

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderTop: "solid 5px #FFFFFF",
  },
  text: {
    // textIndent: "40px",
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    // <Main {...headerProps}>
    <Grid item id="gridContent" xs={12} className={classes.root}>
      <Box display="flex" flexDirection="column" m={2}>
        <Box>
          <Typography color="secondary" variant="subtitle1" gutterBottom>
            <Box ml={2} mt={3} mb={1}>
              Besoin d'aide? Ci-dessous, nous allons vous aider.
            </Box>
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            <Box mx={2} mt={5} textAlign="justify" className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt in felis at tincidunt. Praesent vestibulum lectus non
              diam maximus varius. Suspendisse fermentum at metus in porta.
              Quisque eu est cursus, volutpat diam non, dictum turpis. Nunc eu
              aliquet mauris. Quisque in cursus dolor, eget semper ex. Cras
              semper sem sit amet orci pellentesque laoreet. Nam pellentesque id
              dolor ac dapibus. Fusce rhoncus turpis ac metus pharetra
              venenatis.
            </Box>
          </Typography>
          <Typography variant="body1">
            <Box mx={2} mt={5} textAlign="justify" className={classes.text}>
              Donec nec arcu ex. In a commodo tellus. Aliquam eleifend, massa id
              imperdiet sodales, metus nulla aliquet tellus, id gravida odio
              mauris ac enim. Praesent vel eros rhoncus, pellentesque diam ac,
              scelerisque velit. Sed purus ex, egestas et volutpat in, faucibus
              sit amet diam. In nec vehicula velit, quis molestie ligula. Nam
              maximus pharetra dapibus. Praesent luctus elit feugiat risus
              gravida semper. Maecenas id mollis augue. Nulla nisi libero,
              tristique rutrum mauris vel, elementum dignissim justo. Ut at
              pellentesque quam. Quisque feugiat tincidunt interdum. Donec
              pretium tempor tincidunt. Integer efficitur feugiat quam, eleifend
              commodo nulla sodales et.
            </Box>
          </Typography>
        </Box>
      </Box>
    </Grid>
    // </Main>
  );
};
