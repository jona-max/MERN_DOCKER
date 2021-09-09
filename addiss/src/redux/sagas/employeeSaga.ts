import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchGetEmployees, fetchCreateEmployee, fetchDeleteEmployee, fetchUpdateEmployee} from './fetchAPI';
import { actionPayload, actionType, actionUpdate } from '../types';

// 
function* fetchEmployees(action: actionType): Generator {
    try {
        const employees = yield call(fetchGetEmployees);
        yield put({type: 'GET_EMPLOYEES_SUCCESS', employees: employees})
    } catch (e: any) {
        yield put({type: 'GET_EMPLOYEES_FAILED', message: e.message})
    }
}

export function* employeesSaga() {
    yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchEmployees);
}
//
// 
function* createEmployee(action: actionPayload): Generator {
    try {
        const employee = yield call(fetchCreateEmployee,action.payload);
        yield put({type: 'CREATE_EMPLOYEE_SUCCESS', employee: employee})
    } catch (e: any) {
        yield put({type: 'CREATE_EMPLOYEE_FAILED', message: e.message})
    }
}

export function* createEmployeeSaga() {
    yield takeEvery('CREATE_EMPLOYEE_REQUESTED', createEmployee);
}
//

function* deleteEmployee(action: actionType): Generator {
    try {
        const employee = yield call(fetchDeleteEmployee,action.payload);
        yield put({type: 'DELETE_EMPLOYEE_SUCCESS', employee: employee})
    } catch (e: any) {
        yield put({type: 'DELETE_EMPLOYEE_FAILED', message: e.message})
    }
}

export function* deleteEmployeeSaga() {
    yield takeEvery('DELETE_EMPLOYEE_REQUESTED', deleteEmployee);
}

// 
function* updateEmployee(action: actionUpdate): Generator {
    try {
        const employee = yield call(fetchUpdateEmployee,action.payload);
        yield put({type: 'UPDATE_EMPLOYEE_SUCCESS', employee: employee})
    } catch (e: any) {
        yield put({type: 'UPDATE_EMPLOYEE_FAILED', message: e.message})
    }
}

export function* updateEmployeeSaga() {
    yield takeEvery('UPDATE_EMPLOYEE_REQUESTED', updateEmployee);
}

//
