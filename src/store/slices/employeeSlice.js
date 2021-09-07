import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

var count = 4;

const employeesAdapter = createEntityAdapter({
    sortComparer: (a, b) => a.lastName.localeCompare(b.lastName),
});

const emptyList = employeesAdapter.getInitialState();

const startList = [
    {
        id: 1,
        lastName: "Mustang",
        name: "Roy",
        birthday: "1988-08-28",
        title: "Programmeur",
    },
    {
        id: 2,
        lastName: "Elric",
        name: "Edward",
        birthday: "2000-05-07",
        title: "Vendeur",
    },
    {
        id: 3,
        lastName: "Rockbell",
        name: "Winry",
        birthday: "2001-03-14",
        title: "Infographiste",
    },
]

const filledList = employeesAdapter.upsertMany(emptyList, startList)

const employeesSlice = createSlice({
    name: "employees",
    initialState: filledList,
    reducers: {
        addOrUpdateEmployee(state, action) {
            let employee = action.payload;

            if (employee.id === 0) {
                { employee.id = count };
                count++;
            }

            employeesAdapter.upsertOne(state, employee)
        },
        deleteEmployee: employeesAdapter.removeOne,
    },
});

export const {
    selectAll: selectAllEmployees,
    selectById: selectEmployeeById,
} = employeesAdapter.getSelectors((state) => state.employees);
export const { addOrUpdateEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;