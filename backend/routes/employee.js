const express = require('express');

const {
	getUsers,
	createUser,
	editUser,
	deleteUser,
	getuser,
} = require('../controllers/employee_controller');

const router = express.Router();

router.post('/', createUser);

router.get('/', getUsers);
router.get('/single/:eid', getuser);

router.patch('/:eid', editUser);

router.delete('/:eid', deleteUser);

module.exports = router;
