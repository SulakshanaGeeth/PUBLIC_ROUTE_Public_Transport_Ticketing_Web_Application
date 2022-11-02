const express = require("express");
const router = express.Router();

const Bus = require("./../models/bus");

router.post("/create", async (req, res) => {
  const bus = new Bus({
    VehicleNo: req.body.VehicleNo,
    DriverID: req.body.DriverID,
    ConductorID: req.body.ConductorID,
    Availability: req.body.Availability,
  })
    .save()
    .then(() => res.json("New bus added successfully.."))
    .catch((err) => res.json(err.message));
});

router.put("/edit/:id", async (req, res) => {
  const obj = await Bus.findById(req.params.id);

  obj.VehicleNo = req.body.VehicleNo;
  obj.DriverID = req.body.DriverID;
  obj.ConductorID = req.body.ConductorID;
  obj.Availability = req.body.Availability;

  obj
    .save()
    .then(() => res.json("Bus details updated successfully.."))
    .catch((err) => res.json(err.message));
});

router.get("/all", (req, res) => {
  Bus.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err.message));
});

router.get("/:id", (req, res) => {
  Bus.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err.message));
});

router.delete("/:id", (req, res) => {
  Bus.findByIdAndDelete(req.params.id)
    .then(() => res.json("Bus Details Deleted"))
    .catch((err) => res.json(err.message));
});

module.exports = router;
