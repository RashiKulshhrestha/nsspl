var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    checkin:{
        type: Number,
        required: true
    },
    checkout:{
        type: Number,
        required: true
    },
    hours: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("employee", EmployeeSchema, "employees");