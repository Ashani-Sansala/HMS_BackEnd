const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    empId:{
        type: String,
        required: true
    },
    empName:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    salary:{
        type: "Number",
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Employee', EmployeeSchema);