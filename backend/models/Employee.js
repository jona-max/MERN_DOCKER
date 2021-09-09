const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
	fullName: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	birthYear: {
		type: String,
		required: true,
	},
	salary: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('employee', employeeSchema);
