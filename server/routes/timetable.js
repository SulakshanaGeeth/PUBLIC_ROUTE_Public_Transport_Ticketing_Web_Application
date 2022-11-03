const express = require('express');
const router = express.Router();

const TimeTable = require('./../models/timetable');

router.post('/create', async (req, res) => {
    const table = new TimeTable({
        RouteID:req.body.RouteID,
        Trip: req.body.Trip,
        Day:req.body.Day
    }).save()
    .then(() => res.json("New Time-Table created successfully.."))
    .catch((err) => res.json(err.message)); 
});

router.put('/cell/:Tid', async (req, res) => {
    const obj = await TimeTable.findById(req.params.Tid);

    if(req.body.day == "Monday") {
        if(obj.Day.Monday.filter((ob) => ob._id == req.body.Cid).length == 1) {
            obj.Day.Monday.filter((ob) => ob._id == req.body.Cid)[0].Time = req.body.Time;
            obj.Day.Monday.filter((ob) => ob._id == req.body.Cid)[0].BusID = req.body.BusID;
        }
    } else if(req.params.day == "Tuesday") {
        if(obj.Day.Tuesday.filter((ob) => ob._id == req.params.Cid).length == 1) {
            obj.Day.Tuesday.filter((ob) => ob._id == req.params.Cid)[0].Time = req.body.Time;
            obj.Day.Tuesday.filter((ob) => ob._id == req.params.Cid)[0].BusID = req.body.BusID;
        }
    } else if(req.params.day == "Wednesday") {
        if(obj.Day.Wednesday.filter((ob) => ob._id == req.params.Cid).length == 1) {
            obj.Day.Wednesday.filter((ob) => ob._id == req.params.Cid)[0].Time = req.body.Time;
            obj.Day.Wednesday.filter((ob) => ob._id == req.params.Cid)[0].BusID = req.body.BusID;
        }
    } else if(req.params.day == "Thursday") {
        if(obj.Day.Thursday.filter((ob) => ob._id == req.params.Cid).length == 1) {
            obj.Day.Thursday.filter((ob) => ob._id == req.params.Cid)[0].Time = req.body.Time;
            obj.Day.Thursday.filter((ob) => ob._id == req.params.Cid)[0].BusID = req.body.BusID;
        }
    } else if(req.params.day == "Friday") {
        if(obj.Day.Friday.filter((ob) => ob._id == req.params.Cid).length == 1) {
            obj.Day.Friday.filter((ob) => ob._id == req.params.Cid)[0].Time = req.body.Time;
            obj.Day.Friday.filter((ob) => ob._id == req.params.Cid)[0].BusID = req.body.BusID;
        }
    } else if(req.params.day == "Saturday") {
        if(obj.Day.Saturday.filter((ob) => ob._id == req.params.Cid).length == 1) {
            obj.Day.Saturday.filter((ob) => ob._id == req.params.Cid)[0].Time = req.body.Time;
            obj.Day.Saturday.filter((ob) => ob._id == req.params.Cid)[0].BusID = req.body.BusID;
        }
    } else if(req.params.day == "Sunday") {
        if(obj.Day.Sunday.filter((ob) => ob._id == req.params.Cid).length == 1) {
            obj.Day.Sunday.filter((ob) => ob._id == req.params.Cid)[0].Time = req.body.Time;
            obj.Day.Sunday.filter((ob) => ob._id == req.params.Cid)[0].BusID = req.body.BusID;
        }
    }

    await obj.save()
    .then(() => res.json("Time-Table updated successfully.."))
    .catch((err) => res.json(err.message)); 

})

router.put('/edit/:routeid', async (req, res) => {
    const obj = await TimeTable.findOne({RouteID:req.params.routeid});
    const day = req.body.Day;
    if(obj) {
        if(day == "Monday") {
            
                obj.Day.Monday.push(req.body.Data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 

        } else if(day == "Tuesday") {
            obj.Day.Tuesday.push(req.body.Data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 

        } else if(day == "Wednesday") {
            obj.Day.Wednesday.push(req.body.Data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 

        } else if(day == "Thursday") {
            obj.Day.Thursday.push(req.body.Data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 

        } else if(day == "Friday") {
            obj.Day.Friday.push(req.body.Data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 

        } else if(day == "Saturday") {
            obj.Day.Saturday.push(req.body.Data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 

        } else if(day == "Sunday") {
            obj.Day.Sunday.push(req.body.Data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 

        } 
        
    }
});

router.get('/:routeid', (req, res) => {
    TimeTable.findOne({RouteID:req.params.routeid})
    .then((result) => res.json(result))
    .catch((err) => res.json(err.message));
});

router.delete('/:id/:Day/:Round', async (req, res) => {
    const obj = await TimeTable.findOne({RouteID:req.params.id});
    const day = req.params.Day;

    if(obj) {
        if(day == "Monday") {
            obj.Day.Monday.splice(obj.Day.Monday.findIndex((Object) => Object.Round == req.params.Round), 1);

        } else if(day == "Tuesday") {
            obj.Day.Tuesday.splice(obj.Day.Tuesday.findIndex((Object) => Object.Round == req.params.Round), 1);

        } else if(day == "Wednesday") {
            obj.Day.Wednesday.splice(obj.Day.Wednesday.findIndex((Object) => Object.Round == req.params.Round), 1);

        } else if(day == "Thursday") {
            obj.Day.Thursday.splice(obj.Day.Thursday.findIndex((Object) => Object.Round == req.params.Round), 1);

        } else if(day == "Friday") {
            obj.Day.Friday.splice(obj.Day.Friday.findIndex((Object) => Object.Round == req.params.Round), 1);

        } else if(day == "Saturday") {
            obj.Day.Saturday.splice(obj.Day.Saturday.findIndex((Object) => Object.Round == req.params.Round), 1);

        } else if(day == "Sunday") {
            obj.Day.Sunday.splice(obj.Day.Sunday.findIndex((Object) => Object.Round == req.params.Round), 1);

        } 

        await obj.save()
        .then(() => res.json('Round removed successfully'))
        .catch((err) => res.json(err.message));        
    }
});

router.delete('/:id', (req, res) => {
    TimeTable.findByIdAndDelete(req.params.id)
    .then(() => res.json("TimeTable Deleted"))
    .catch((err) => res.json(err.message))
});

module.exports = router;