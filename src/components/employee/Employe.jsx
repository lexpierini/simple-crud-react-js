// MAIN IMPORTS
import React, { useState } from "react";

// COMPONENTS IMPORTS
import Form from "./Form";
import Table from "./Table";

// MATERIAL-UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// MATERIAL-UI CUSTOMIZATION
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderTop: "solid 5px #FFFFFF",
  },
  content: {
    display: "flex",
  },
}));

// LOCAL STATE
const initialState = {
  employee: {
    id: 0,
    lastName: "",
    name: "",
    birthday: "",
    title: "",
  },
};

// MAIN
export default (props) => {
  const classes = useStyles();
  const [employee, setEmployee] = useState(initialState.employee);

  function handleInputChange(event) {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  }

  function handleEditEmployee(employee) {
    setEmployee(employee);
  }

  function handleInputsClear() {
    setEmployee(initialState.employee);
  }

  return (
    <Grid item id="gridContent" xs={12} className={classes.root}>
      <Box display="flex" flexDirection="column" m={2}>
        <Box>
          <Typography color="secondary" variant="subtitle1" gutterBottom>
            <Box ml={2} mt={3} mb={4}>
              Inscription des employés: Inclusion, Listage, Édition, Suppression
            </Box>
          </Typography>
        </Box>
        <Box>
          <Form
            employee={employee}
            onHandleInputChange={handleInputChange}
            onHandleInputsClear={handleInputsClear}
          />
        </Box>
        <Box mt={4}>
          <Table onHandleEditEmployee={handleEditEmployee} />
        </Box>
      </Box>
    </Grid>
  );
};
