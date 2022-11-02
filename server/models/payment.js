const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Payment = new schema({
    UserID:{type:String, required: true, unique: true},
    Time: {type:String, required: true},
    Date: {type:String, required: true},
    Tyeper: {type:String, required: true}
});

const payment = mongoose.model('payment', Payment);
module.exports = payment;