// MAIN IMPORTS
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX ACTIONS IMPORTS
import {
  selectAllEmployees,
  deleteEmployee,
} from "../../store/slices/employeeSlice";

// // MATERIAL-UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// MATERIAL-UI CUSTOMIZATION
const useStyles = makeStyles((theme) => ({
  tableContainer: {
    backgroundColor: "#F6F6F6",
  },
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
  },
  tableCellHeader: {
    color: "#F6F6F6",
  },
  iconButton: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

// MAIN
export default (props) => {
  const classes = useStyles();
  const { onHandleEditEmployee } = props;
  const employees = useSelector(selectAllEmployees);
  const dispatch = useDispatch();

  function calculateAge(birthday) {
    const dateNowMilliseconds = Date.parse(new Date());
    const birthdayMilliseconds = Date.parse(birthday);
    return Math.round(
      (dateNowMilliseconds - birthdayMilliseconds) / (1000 * 60 * 60 * 24 * 365)
    );
  }

  if (employees.length > 0) {
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead color="primary" className={classes.tableHeader}>
            <TableRow>
              <TableCell
                variant="head"
                size="small"
                className={classes.tableCellHeader}
              >
                Nom
              </TableCell>
              <TableCell
                variant="head"
                size="small"
                className={classes.tableCellHeader}
              >
                Prénom
              </TableCell>
              <TableCell
                variant="head"
                size="small"
                className={classes.tableCellHeader}
              >
                Âge
              </TableCell>
              <TableCell variant="head" size="small" />
              <TableCell variant="head" size="small" />
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow hover key={employee.id}>
                <TableCell size="small">{employee.lastName}</TableCell>
                <TableCell size="small">{employee.name}</TableCell>
                <TableCell size="small">
                  {calculateAge(employee.birthday)}
                </TableCell>
                <TableCell size="small">
                  <IconButton
                    id="modifierEmployeButton"
                    aria-label="edit"
                    size="small"
                    color="primary"
                    className={classes.iconButton}
                    onClick={() => onHandleEditEmployee(employee)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell size="small">
                  <IconButton
                    id="deleteEmplyeButton"
                    aria-label="delete"
                    size="small"
                    color="primary"
                    className={classes.iconButton}
                    onClick={() => dispatch(deleteEmployee(employee.id))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return null;
  }
};
