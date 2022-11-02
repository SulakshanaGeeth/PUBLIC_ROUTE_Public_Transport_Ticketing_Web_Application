const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Bus = new schema({
    VehicleNo : {type:String, required: true},
    DriverID : {type:String, required: true},
    ConductorID : {type:String, required: true},
    Availability : {type:Boolean, required: true},
});

const bus = mongoose.model('bus', Bus);
module.exports = bus;