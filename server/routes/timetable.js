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
    const day = req.params.day;

    if(obj) {
        if(obj.Day(day).filter((ob) => ob.Round == req.body.Round).length == 1) {
            obj.Day(day).filter((ob) => ob.Round == req.body.Round)[0].Start = req.body.Start;
            obj.Day(day).filter((ob) => ob.Round == req.body.Round)[0].End = req.body.End;
            obj.Day(day).filter((ob) => ob.Round == req.body.Round)[0].BusID = req.body.BusID;

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
});

router.get('/:routeid', (req, res) => {
    TimeTable.findOne({RouteID:req.params.routeid})
    .then((result) => res.json(result))
    .catch((err) => res.json(err.message));
});

router.delete('/:id', (req, res) => {
    TimeTable.findByIdAndDelete(req.params.id)
    .then(() => res.json("TimeTable Deleted"))
    .catch((err) => res.json(err.message))
});

module.exports = router;