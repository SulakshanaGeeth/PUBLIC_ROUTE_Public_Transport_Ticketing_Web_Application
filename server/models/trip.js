const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Trip = new schema({
    Route:{type:String, required: true},
    BusNo:{type:String, required: true},
    Date:{type:String, required: true},
    Time:{type:String, required: true},
    StartPoint: {type:String, required: true},
    EndPoint: {type:String, required: true},
    Price: {type:Number, required: true},
});

const trip = mongoose.model('trip', Trip);
module.exports = trip;