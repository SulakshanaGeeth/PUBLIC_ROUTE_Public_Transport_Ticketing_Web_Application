const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TimeTable = new schema({
    RouteID : {type:String, required: true},
    Day:{
        Monday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true}
        }],
        Tuesday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true}
        }],
        Wednesday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true}
        }],
        Thursday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true}
        }],
        Friday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true}
        }],
        Saturday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true}
        }],
        Sunday : [{
            BusID: {type:String, required: true},
            Start: {type:String, required: true},
            End: {type:String, required: true}
        }]
    }
});

const timetable = mongoose.model('timetable', TimeTable);
module.exports = timetable;