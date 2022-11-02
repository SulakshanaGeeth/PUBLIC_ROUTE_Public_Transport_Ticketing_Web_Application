const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Account = new schema({
    UserID : {type:String, required: true, unique: true},
    Balance : {type:Number, required: true, unique: true}
});

const account = mongoose.model('account', Account);
module.exports = account;