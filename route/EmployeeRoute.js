const express = require('express');
const EmployeeController = require('../controller/EmployeeController');

const router = express.Router();

router.post('/saveEmployee', EmployeeController.saveEmployee);
router.put('/updateEmployee', EmployeeController.updateEmployee);
router.delete('/deleteEmployee', EmployeeController.deleteEmployee);
router.get('/searchEmployee', EmployeeController.searchEmployee);
router.get('/showAllEmployees', EmployeeController.showAllEmployees);

module.exports = router;

