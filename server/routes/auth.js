const router = require("express").Router();

const {
  register,
  login,
  get,
  getById,
  getUsers,
  updateById,
  deleteById,
  changePassword,
  countDocuments,
  countOrders,
  getOrders,
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/").get(get);

router.route("/get/:id").get(getById);

router.route("/users").get(getUsers);

router.route("/update/:id").put(updateById);

router.route("/delete/:id").delete(deleteById);

router.route("/changePass/:id").put(changePassword);

router.route("/getCount").get(countDocuments);

router.route("/getOrderCount").get(countOrders);

router.route("/getOrders").get(getOrders);

module.exports = router;
