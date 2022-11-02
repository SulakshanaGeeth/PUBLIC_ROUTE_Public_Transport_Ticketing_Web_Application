const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TimeTable = new schema({
    RouteID : {type:String, required: true, unique: true},
    Day:{
        Monday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true},
            Round: {type:Number, required: true}
        }],
        Tuesday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true},
            Round: {type:Number, required: true}
        }],
        Wednesday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true},
            Round: {type:Number, required: true}
        }],
        Thursday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true},
            Round: {type:Number, required: true}
        }],
        Friday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true},
            Round: {type:Number, required: true}
        }],
        Saturday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true},
            Round: {type:Number, required: true}
        }],
        Sunday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true},
            Round: {type:Number, required: true}
        }]
    }
});

const timetable = mongoose.model('timetable', TimeTable);
module.exports = timetable;