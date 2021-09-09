import * as type from '../types';



export function getEmployees() {
	return {
		type: type.GET_EMPLOYEES_REQUESTED,
	};
}

export function createEmployee(data: type.dataEmployee) {
	return {
		type: type.CREATE_EMPLOYEE_REQUESTED,
		payload: data
	};
}

export function deleteEmployee(Id: string) {
	return {
		type: type.DELETE_EMPLOYEE_REQUESTED,
		payload: Id
	};
}

export function updateEmployee(data: type.dataEmployee) {
	return {
		type: type.UPDATE_EMPLOYEE_REQUESTED,
		payload: data
	};
}
