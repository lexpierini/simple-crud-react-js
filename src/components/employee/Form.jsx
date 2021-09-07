// MAIN IMPORTS
import React from "react";
import { useDispatch } from "react-redux";

// REDUX ACTIONS IMPORTS
import {
  addOrUpdateEmployee,
} from "../../store/slices/employeeSlice";

// MATERIAL-UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

// MATERIAL-UI CUSTOMIZATION
const useStyles = makeStyles((theme) => ({
  fields: {
    flexGrow: 1,
    margin: theme.spacing(2),
    width: "25ch",
    backgroundColor: "#F6F6F6",

    "& label.Mui-focused": {
      color: "#F89923",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#5482A2",
        color: "#5482A2",
      },
      "&:hover fieldset": {
        borderColor: "#F89923",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#5482A2",
      },
    },
  },
  button: {
    margin: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

// MAIN
export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { employee, onHandleInputChange, onHandleInputsClear } = props;

  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <TextField
          label="Nom"
          variant="outlined"
          name="lastName"
          type="text"
          size="small"
          className={classes.fields}
          value={employee.lastName}
          onChange={props.onHandleInputChange}
        />
        <TextField
          label="Prénom"
          variant="outlined"
          name="name"
          type="text"
          size="small"
          className={classes.fields}
          value={employee.name}
          onChange={onHandleInputChange}
        />
      </Box>
      <Box>
        <TextField
          label="Date de Naissance"
          variant="outlined"
          name="birthday"
          type="date"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.fields}
          value={employee.birthday}
          onChange={onHandleInputChange}
        />
        <TextField
          label="Titre"
          variant="outlined"
          name="title"
          select
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          SelectProps={{
            native: true,
          }}
          className={classes.fields}
          value={employee.title}
          onChange={onHandleInputChange}
        >
          <option value="DEFAULT"></option>
          <option value="Infographiste">Infographiste</option>
          <option value="Programmeur">Programmeur</option>
          <option value="Vendeur">Vendeur</option>
        </TextField>
      </Box>

      <Box display="flex" justifyContent="flex-end" mr={1} mb={1}>
        <Button
          id="saveEmployeButton"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          className={classes.button}
          onClick={() => {
            dispatch(addOrUpdateEmployee(employee));
            onHandleInputsClear();
          }}
        >
          Enregistrer
        </Button>
        <Button
          id="clearFormFieldsButton"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<ClearIcon />}
          className={classes.button}
          onClick={() => {
            onHandleInputsClear();
          }}
        >
          Annuler
        </Button>
      </Box>
    </Box>
  );
};
