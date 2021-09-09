export const GET_EMPLOYEES_REQUESTED = 'GET_EMPLOYEES_REQUESTED';
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAILED = 'GET_EMPLOYEES_FAILED';

export const CREATE_EMPLOYEE_REQUESTED = 'CREATE_EMPLOYEE_REQUESTED';
export const CREATE_EMPLOYEE_SUCCESS = 'CREATE_EMPLOYEE_SUCCESS';
export const CREATE_EMPLOYEE_FAILED = 'CREATE_EMPLOYEE_FAILED';

export const DELETE_EMPLOYEE_REQUESTED = 'DELETE_EMPLOYEE_REQUESTED';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_FAILED = 'DELETE_EMPLOYEE_FAILED';

export const UPDATE_EMPLOYEE_REQUESTED = 'UPDATE_EMPLOYEE_REQUESTED';
export const UPDATE_EMPLOYEE_SUCCESS = 'UPDATE_EMPLOYEE_SUCCESS';
export const UPDATE_EMPLOYEE_FAILED = 'UPDATE_EMPLOYEE_FAILED';


export interface dataEmployee  {
    fullName: string,
    gender: string,
    birthYear: string,
    salary: string,
}

export interface updataEmployee  {
    fullName: string,
    gender: string,
    birthYear: string,
    salary: string,
    _id: string,
}

export interface idEmployee  {
    _id: string
}

export interface actionType {
    type: string,
    payload: string
}

export interface actionPayload {
    type: string,
    payload: {
        fullName: string,
        birthYear: string,
        gender: string,
        salary: string
    }
}

export interface actionUpdate {
    type: string,
    payload: {
        fullName: string,
        birthYear: string,
        gender: string,
        salary: string,
        _id: string,
        _v: 0
    }
}

export interface stater {
    createEmployee: {
        employee: {},
        loading: boolean,
        error: {}
    }
    deleteEmployee: {
        employee: {},
        loading: boolean,
        error: {}
    }
    updateEmployee: {
        employee: {},
        loading: boolean,
        error: {}
    }
    getEmployees: {
        employees: [],
        loading: boolean,
        error: {}
    }
}

export interface useLists {
    fullName: string,
	gender: string,
	birthYear: string,
	salary: number;
	_id: string;
}
