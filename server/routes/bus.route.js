const express = require("express");
const router = express.Router();
const Product = require("../models/bus.model")
const busController = require("../controllers/bus.controller");


router.get("/", busController.getAllBus);
router.post("/",busController.addBus);
router.get("/:id",busController.getById);
router.put("/:id",busController.updateBus);
router.delete("/:id",busController.deleteBus);

module.exports = router;
