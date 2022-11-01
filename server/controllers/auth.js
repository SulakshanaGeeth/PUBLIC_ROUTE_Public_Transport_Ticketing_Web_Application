const User = require("../models/auth");
const Order = require("./../models/Order");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { username, phoneNumber, email, password, type } = req.body;

  const isAvailable = await User.findOne({
    email: { $regex: new RegExp(email, "i") }, // constructor with string pattern as first
  });

  if (isAvailable) {
    return res.status(401).json({ error: "Already Used This Email ! " });
  }

  try {
    const user = await User.create({
      username,
      phoneNumber,
      email,
      password,
      type,
    });
    sendToken(user, 200, res);
  } catch (error) {
    if (error.code === 11000) {
      const message = "Already have an account using this email ";
      return res.status(400).json({ success: false, error: message });
    }

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, error: message });
    }
  }
};

exports.login = async (req, res) => {
  //controller for login
  const { email, password } = req.body;

  if (!email && !password) {
    //backend validation
    return res
      .status(400)
      .json({ success: false, error: "Please enter username and password" });
  } //400 Bad Request

  try {
    const user = await User.findOne({
      email: { $regex: new RegExp(email, "i") }, // constructor with string pattern as first
    }).select("+password"); //match two passwords (change the default behavior at the schema.calls via field selection as '+password')

    if (!user) {
      //true
      return res.status(401).json({
        success: false,
        available: "User does not exists. Please create an account !",
      });
    }

    const isMatch = await user.matchPasswords(password); //matching the passwords from the received from request and from the db

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid Credentials" });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({
      // 500 internal server error
      success: false,
      error: error.message,
    });
  }
};

exports.get = async (req, res) => {
  await User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ err }));
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  await User.findOne({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json({ err }));
};

exports.getUsers = async (req, res) => {
  await User.find({ type: "user" })
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ err }));
};

exports.updateById = async (req, res) => {
  const { id } = req.params;

  const { email, phoneNumber, username } = req.body;

  await User.findByIdAndUpdate(id, {
    username,
    email,
    phoneNumber,
  })
    .then(() => res.json({ message: "Successfully Update the details" }))
    .catch((err) => res.status(500).json({ err }));
};

exports.deleteById = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json({ success: false, err }));
};

exports.changePassword = async (req, res) => {
  const { id } = req.params;

  let { password, newpassword } = req.body;

  try {
    const user = await User.findOne({ _id: id }).select("+password");

    if (!user) {
      //true
      return res.status(401).json({
        success: false,
        available: "User does not exists. Please create an account !",
      });
    }

    const isMatch = await user.matchPasswords(password); //matching the passwords from the received from request and from the db

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid Current Password" });
    }

    const salt = await bcrypt.genSalt(10);
    newpassword = await bcrypt.hash(newpassword, salt);
  } catch (error) {
    res.status(500).json({
      // 500 internal server error
      success: false,
      error: error.message,
    });
  }

  await User.findByIdAndUpdate(id, {
    password: newpassword,
  })
    .then(() => res.json({ message: "Successfully Update the Password" }))
    .catch((err) => res.status(500).json({ err }));
};

exports.countDocuments = async (req, res) => {
  User.countDocuments({ type: "user" }, function (err, doCount) {
    if (err) {
      res.send(err);
      return;
    }

    res.json({ count: doCount });
  });
};

exports.countOrders = async (req, res) => {
  Order.countDocuments({}, function (err, doCount) {
    if (err) {
      res.send(err);
      return;
    }

    res.json({ count: doCount });
  });
};

exports.getOrders = async (req, res) => {
  await Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(500).json({ err }));
};

const sendToken = (user, statusCode, res) => {
  //JWT get
  const token = user.getSignedToken();
  const _id = user._id;
  const username = user.username;
  const phoneNumber = user.phoneNumber;
  const email = user.email;
  const type = user.type;
  const dept = user.dept;
  res.status(200).json({
    success: true,
    token,
    _id,
    username,
    phoneNumber,
    email,
    type,
    dept,
  });
};
