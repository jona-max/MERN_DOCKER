const Employee = require('../models/Employee');

const createUser = async (req, res, next) => {
	const { fullName, gender, birthYear, salary } = req.body;

	// express-validator library could be used here
	if (
		fullName.length === 0 ||
		gender.length === 0 ||
		salary.length === 0 ||
		birthYear.length === 0
	) {
		return res.json({ success: false, message: 'Invalid data input' });
	}

	const employeeCreated = new Employee({
		fullName,
		gender,
		birthYear,
		salary,
	});

	try {
		await employeeCreated.save();
	} catch (err) {
		return res.json({
			success: false,
			message: 'creating Employee failed, try again later',
		});
	}

	res.status(201).json({
		success: true,
		message: 'Created successfully',
		employee: employeeCreated,
	});
};

const getUsers = async (req, res, next) => {
	let employees;
	try {
		employees = await Employee.find();
	} catch (err) {
		return res.json({
			success: false,
			message: 'getting employees failed, try again!',
		});
	}

	if (!employees) {
		return res.json({
			success: false,
			message: 'No Employees found, Create Some!',
		});
	}
	res
		.status(201)
		.json({ success: true, message: 'employees found', employees: employees });
};

const getuser = async (req, res, next) => {
	const employeeId = req.params.eid;

	let employee;
	try {
		employee = await Employee.findById(employeeId);
	} catch (err) {
		return res.json({
			success: false,
			message: 'getting employee failed, try again!',
		});
	}

	if (!employee) {
		return res.json({
			success: false,
			message: 'No Employee found by that Id!',
		});
	}
	res
		.status(201)
		.json({ success: true, message: 'employee found', employee: employee });
};

const editUser = async (req, res, next) => {
	const employeeId = req.params.eid;

	const { fullName, gender, birthYear, salary } = req.body;

	// express-validator library could be used here
	if (
		fullName.length === 0 ||
		gender.length === 0 ||
		salary.length === 0 ||
		birthYear.length === 0
	) {
		return res.json({ success: false, message: 'Invalid data input' });
	}

	let employee;
	try {
		employee = await Employee.findById(employeeId);
	} catch (err) {
		return res.json({ success: false, message: 'update failed' });
	}

	if (!employee) {
		return res.json({
			success: false,
			message: 'No employee by found in the database',
		});
	}

	employee.fullName = fullName;
	employee.gender = gender;
	employee.birthYear = birthYear;
	employee.salary = salary;

	try {
		await employee.save();
	} catch (err) {
		return res.json({ success: false, message: 'update failed' });
	}

	res
		.status(200)
		.json({ success: true, message: 'update successfull', employee: employee });
};

const deleteUser = async (req, res, next) => {
	const employeeId = req.params.eid;

	let employee;
	try {
		employee = await Employee.findById(employeeId);
	} catch (err) {
		return res.json({ success: false, message: 'Delete failed' });
	}

	if (!employee) {
		return res.json({
			success: false,
			message: 'delete failed employee does not exist',
		});
	}

	try {
		await employee.remove();
	} catch (err) {
		return res.json({ success: false, message: 'delete failed' });
	}

	res.status(200).json({ success: true, message: 'user deleted' });
};

module.exports = { createUser, deleteUser, editUser, getUsers, getuser };
