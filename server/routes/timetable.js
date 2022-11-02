const express = require('express');
const router = express.Router();

const TimeTable = require('./../models/timetable');

router.post('/create', async (req, res) => {
    const table = new TimeTable({
        RouteID:req.body.RouteID,
        Day:req.body.Day
    }).save()
    .then(() => res.json("New Time-Table created successfully.."))
    .catch((err) => res.json(err.message)); 
});

router.put('/edit/:routeid', async (req, res) => {
    const obj = await TimeTable.findOne({RouteID:req.params.routeid});
    const day = req.body.Day;
    if(obj) {
        if(day == "Monday") {
            if(obj.Day.Monday.filter((ob) => ob.Round == req.body.Round).length == 1) {
                obj.Day.Monday.filter((ob) => ob.Round == req.body.Round)[0].Start = req.body.Start;
                obj.Day.Monday.filter((ob) => ob.Round == req.body.Round)[0].End = req.body.End;
                obj.Day.Monday.filter((ob) => ob.Round == req.body.Round)[0].BusID = req.body.BusID;
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            } else {
                obj.Day(day).push(req.body.data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            }
        } else if(day == "Tuesday") {
            if(obj.Day.Tuesday.filter((ob) => ob.Round == req.body.Round).length == 1) {
                obj.Day.Tuesday.filter((ob) => ob.Round == req.body.Round)[0].Start = req.body.Start;
                obj.Day.Tuesday.filter((ob) => ob.Round == req.body.Round)[0].End = req.body.End;
                obj.Day.Tuesday.filter((ob) => ob.Round == req.body.Round)[0].BusID = req.body.BusID;
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            } else {
                obj.Day(day).push(req.body.data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            }
        } else if(day == "Wednesday") {
            if(obj.Day.Wednesday.filter((ob) => ob.Round == req.body.Round).length == 1) {
                obj.Day.Wednesday.filter((ob) => ob.Round == req.body.Round)[0].Start = req.body.Start;
                obj.Day.Wednesday.filter((ob) => ob.Round == req.body.Round)[0].End = req.body.End;
                obj.Day.Wednesday.filter((ob) => ob.Round == req.body.Round)[0].BusID = req.body.BusID;
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            } else {
                obj.Day(day).push(req.body.data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            }
        } else if(day == "Thursday") {
            if(obj.Day.Thursday.filter((ob) => ob.Round == req.body.Round).length == 1) {
                obj.Day.Thursday.filter((ob) => ob.Round == req.body.Round)[0].Start = req.body.Start;
                obj.Day.Thursday.filter((ob) => ob.Round == req.body.Round)[0].End = req.body.End;
                obj.Day.Thursday.filter((ob) => ob.Round == req.body.Round)[0].BusID = req.body.BusID;
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            } else {
                obj.Day(day).push(req.body.data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            }
        } else if(day == "Friday") {
            if(obj.Day.Friday.filter((ob) => ob.Round == req.body.Round).length == 1) {
                obj.Day.Friday.filter((ob) => ob.Round == req.body.Round)[0].Start = req.body.Start;
                obj.Day.Friday.filter((ob) => ob.Round == req.body.Round)[0].End = req.body.End;
                obj.Day.Friday.filter((ob) => ob.Round == req.body.Round)[0].BusID = req.body.BusID;
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            } else {
                obj.Day(day).push(req.body.data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            }
        } else if(day == "Saturday") {
            if(obj.Day.Saturday.filter((ob) => ob.Round == req.body.Round).length == 1) {
                obj.Day.Saturday.filter((ob) => ob.Round == req.body.Round)[0].Start = req.body.Start;
                obj.Day.Saturday.filter((ob) => ob.Round == req.body.Round)[0].End = req.body.End;
                obj.Day.Saturday.filter((ob) => ob.Round == req.body.Round)[0].BusID = req.body.BusID;
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            } else {
                obj.Day(day).push(req.body.data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            }
        } else if(day == "Sunday") {
            if(obj.Day.Sunday.filter((ob) => ob.Round == req.body.Round).length == 1) {
                obj.Day.Sunday.filter((ob) => ob.Round == req.body.Round)[0].Start = req.body.Start;
                obj.Day.Sunday.filter((ob) => ob.Round == req.body.Round)[0].End = req.body.End;
                obj.Day.Sunday.filter((ob) => ob.Round == req.body.Round)[0].BusID = req.body.BusID;
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            } else {
                obj.Day(day).push(req.body.data);
    
                await obj.save()
                .then(() => res.json("Time-Table updated successfully.."))
                .catch((err) => res.json(err.message)); 
            }
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