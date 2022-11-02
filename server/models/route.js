const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Route = new schema({
    RouteNumber : {type:String, required: true},
    StartPoint : {type:String, required: true},
    Endpoint : {type:String, required: true},
    OtherPoints : [{
        pointName : {type:String, required: false},
        price : {type:String, required: false}
}]
});

const route = mongoose.model('route', Route);
module.exports = route;