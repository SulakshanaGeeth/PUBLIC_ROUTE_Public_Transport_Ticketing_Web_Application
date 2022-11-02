const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Route = new schema({
    RouteNumber : {type:String, required: true},
    StartPoint : {type:String, required: true},
    Endpoint : {type:String, required: true},
    OtherPoints : [{
        pointName : {type:String, required: true},
        price : {type:String, required: true}
}]
});

const route = mongoose.model('route', Route);
module.exports = route;