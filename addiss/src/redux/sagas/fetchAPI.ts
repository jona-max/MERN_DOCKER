import {dataEmployee, updataEmployee} from '../types';

const getEmployees = 'http://localhost:5000/api/user/';
// const getEmployee = 'http://localhost:5000/api/user/';
const creatEmployee = 'http://localhost:5000/api/user/';
const updateEmployee = 'http://localhost:5000/api/user/';
const deleteEmployee = 'http://localhost:5000/api/user/';

// 
export function fetchGetEmployees() {
	return fetch(getEmployees, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.catch((error) => {
			throw error;
		});
}
//

// 
export function fetchCreateEmployee(data: dataEmployee) {
	return fetch(creatEmployee, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	})
		.then((response) => response.json())
		.catch((error) => {
			throw error;
		});
}
// fetchDeleteEmployee

export function fetchDeleteEmployee(Id: string) {
	return fetch(deleteEmployee + Id, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.catch((error) => {
			throw error;
		});
}

// fetchUpdateEmployee
export function fetchUpdateEmployee(data: updataEmployee) {
	return fetch(updateEmployee + data._id, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	})
		.then((response) => response.json())
		.catch((error) => {
			throw error;
		});
}