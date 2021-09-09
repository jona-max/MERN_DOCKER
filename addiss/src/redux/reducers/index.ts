import { combineReducers } from 'redux';
import {getEmployees, createEmployee, deleteEmployee, updateEmployee} from './employees';

const rootReducer = combineReducers({
    getEmployees: getEmployees,
    createEmployee: createEmployee,
    deleteEmployee: deleteEmployee,
    updateEmployee: updateEmployee
})

export default rootReducer;