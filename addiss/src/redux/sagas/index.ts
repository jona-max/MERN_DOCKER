import {all} from 'redux-saga/effects';
import {employeesSaga, createEmployeeSaga, deleteEmployeeSaga, updateEmployeeSaga} from './employeeSaga';

export default function* rootSaga() {
    yield all([employeesSaga(), createEmployeeSaga(), deleteEmployeeSaga(), updateEmployeeSaga()]);
}