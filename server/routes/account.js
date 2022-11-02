const express = require('express');
const router = express.Router();

const Account = require('./../models/account');

router.post('/create', async (req, res) => {
    const account = new Account({
        UserID:req.body.UserID,
        Balance:req.body.Balance
    }).save()
    .then(() => res.json("New account created successfully.."))
    .catch((err) => res.json(err.message)); 
});

router.put('/edit/:id', async (req, res) => {
    const obj = await Account.findById(req.params.id);

    obj.Balance = req.body.Balance;

    obj.save()
    .then(() => res.json("Account updated successfully.."))
    .catch((err) => res.json(err.message)); 
});

router.get('/:UserID', (req, res) => {
    Account.findOne({UserID:req.params.UserID})
    .then((result) => res.json(result))
    .catch((err) => res.json(err.message));
});

router.delete('/:id', (req, res) => {
    Account.findByIdAndDelete(req.params.id)
    .then(() => res.json("Account Deleted"))
    .catch((err) => res.json(err.message))
});

module.exports = router;