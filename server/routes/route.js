const express = require('express');
const router = express.Router();

const Route = require('./../models/route');

router.post('/create', async (req, res) => {

    const nRoute = await new Route({
        RouteNumber:req.body.RouteNumber,
        StartPoint:req.body.StartPoint,
        Endpoint:req.body.Endpoint,
        OtherPoints:req.body.OtherPoints
    }).save()
    .then(() => res.json("New route created successfully.."))
    .catch((err) => res.json(err.message));
});

router.put('/edit/:id', async (req, res) => {

    const obj = await Route.findById(req.params.id);    

    if(obj) {
        obj.RouteNumber = req.body.RouteNumber;
        obj.StartPoint = req.body.StartPoint;
        obj.Endpoint = req.body.EndPoint;

        await obj.save()
        .then(() => res.json('Route details updated successfully.'))
        .catch((err) => res.json(err.message));
    } else {
        res.status(123).json('Invalid ID');
    }
});

router.put('/point/:id', async (req, res) => {

    const obj = await Route.findById(req.params.id);    

    if(obj) {
        if(obj.OtherPoints.filter((ob) => ob.pointName == req.body.OtherPoints.pointName ).length == 1) {
            obj.OtherPoints.filter((ob) => ob.pointName == req.body.OtherPoints.pointName )[0].price = req.body.OtherPoints.price;
        } else {
            obj.OtherPoints.push(req.body.OtherPoints);
        }
        await obj.save()
        .then(() => res.json('Route details updated successfully.'))
        .catch((err) => res.json(err.message));
    } else {
        res.status(123).json('Invalid ID');
    }
});

router.get('/all', (req, res) => {
    Route.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err.message));
});

router.get('/:id', (req, res) => {
    Route.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err.message));
});

router.delete('/point/:id/:point', async (req, res) => {
    const obj = await Route.findById(req.params.id);

    if(obj) {
        obj.OtherPoints.splice(obj.OtherPoints.findIndex((Object) => Object.pointName == req.params.point), 1);

        await obj.save()
        .then(() => res.json('Point removed successfully'))
        .catch((err) => res.json(err.message));
    } else {
        res.status(123).json("No point details Found!"); 
    }
});

router.delete('/remove/:id', (req, res) =>{
    Route.findByIdAndDelete(req.params.id)
    .then(() => res.json("Route Deleted"))
    .catch((err) => res.json(err.message))
});

module.exports = router;