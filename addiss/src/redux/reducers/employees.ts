import * as type from '../types';

const initialStateGetEmployees = {
	employees: [],
	loading: false,
	error: null,
};

export function getEmployees(state = initialStateGetEmployees, action: any)  {
    switch (action.type) {
        case type.GET_EMPLOYEES_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.GET_EMPLOYEES_SUCCESS:
			return {
				...state,
				loading: false,
				employees: action.employees,
			};
		case type.GET_EMPLOYEES_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		default:
			return state;
    }
}

const initialStateCreate = {
	employee: {},
	loading: false,
	error: null,
};

export function createEmployee(state = initialStateCreate, action: any)  {
    switch (action.type) {
        case type.CREATE_EMPLOYEE_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.CREATE_EMPLOYEE_SUCCESS:
			return {
				...state,
				loading: false,
				employee: action.employee,
			};
		case type.CREATE_EMPLOYEE_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		default:
			return state;
    }
}

const initialStateDelete = {
	employee: {},
	loading: false,
	error: null,
};

export function deleteEmployee(state = initialStateDelete, action: any)  {
    switch (action.type) {
        case type.DELETE_EMPLOYEE_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.DELETE_EMPLOYEE_SUCCESS:
			return {
				...state,
				loading: false,
				employee: action.employee,
			};
		case type.DELETE_EMPLOYEE_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		default:
			return state;
    }
}

// 
const initialStateUpdate = {
	employee: {},
	loading: false,
	error: null,
};

export function updateEmployee(state = initialStateUpdate, action: any)  {
    switch (action.type) {
        case type.UPDATE_EMPLOYEE_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.UPDATE_EMPLOYEE_SUCCESS:
			return {
				...state,
				loading: false,
				employee: action.employee,
			};
		case type.UPDATE_EMPLOYEE_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		default:
			return state;
    }
}

