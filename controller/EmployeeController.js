const Employee = require('../model/EmployeeSchema');

const saveEmployee = (req, resp) => {
    const tempEmployee = new Employee({
        empId: req.body.empId,
        empName: req.body.empName,
        designation: req.body.designation,
        email: req.body.email,
        contact: req.body.contact,
        salary: req.body.salary,
        gender: req.body.gender,
        address: req.body.address,
    });
    tempEmployee.save().then(result=>{
        resp.status(201).json({status:true, message: 'Saved..'})
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const updateEmployee = (req, resp) => {
    Employee.updateOne(
        {empId:req.body.empId}, {
            $set:{
                empName: req.body.empName,
                designation: req.body.designation,
                email: req.body.email,
                contact: req.body.contact,
                salary: req.body.salary,
                gender: req.body.gender,
                address: req.body.address,
            }
        }
    ).then(result => {
        if (result.nModified>0){
            resp.status(201).json({status:true, message: 'Updated..'})
        }else {
            resp.status(200).json({status:false, message: 'Try Again..'})
        }
    }).catch(error => {
        resp.status(500).json(error);
    })
}

const deleteEmployee = (req, resp) => {
    Employee.deleteOne({
        id: req.headers.empId
    }).then(result=>{
        if (result.deletedCount>0){
            resp.status(200).json({status:true, message: 'Deleted..'})
        }else {
            resp.status(400).json({status:false, message: 'Try Again..'})
        }

    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const searchEmployee = (req, resp) => {
    Employee.findOne({
        id:req.headers.empId
    }).then(result => {
        if (result==null){
            resp.status(404).json({status:false, message: 'Empty result..'})
        }else {
            resp.status(200).json({status:true, data: result})
        }

    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const showAllEmployees = (req, resp) => {
    Employee.find().then(result => {
        resp.status(200).json({status:true, data: result})
    }).catch(error => {
        resp.status(500).json(error);
    })
}

module.exports = {
    saveEmployee, updateEmployee, deleteEmployee, searchEmployee, showAllEmployees
}

