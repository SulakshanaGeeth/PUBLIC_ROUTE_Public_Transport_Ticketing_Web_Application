const express = require('express');
const router = express.Router();

const Payment = require('./../models/payment');

router.post('/create', async (req, res) => {
    const payment = new Payment({
        UserID:req.body.UserID,
        Date:req.body.Date,
        Time:req.body.Time,
        Type:req.body.Type
    }).save()
    .then(() => res.json("New payment added successfully.."))
    .catch((err) => res.json(err.message)); 
});

router.get('/all', (req, res) => {
    Payment.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err.message));
});

router.get('/:UserID', (req, res) => {
    Payment.findOne({UserID:req.params.UserID})
    .then((result) => res.json(result))
    .catch((err) => res.json(err.message));
});

module.exports = router;