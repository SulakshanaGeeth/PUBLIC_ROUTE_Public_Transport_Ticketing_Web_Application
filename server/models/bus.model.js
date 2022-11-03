const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const busSchema = new Schema({
  // productId: {
  //   type: String,
  //
  // },

  busNo: {
    type: String,
    required: true
  },

  routeNo: {
    type: String,
    required: true
  },

  from: {
    type: String,
    required: true
  },

  to: {
    type: String ,
    required: true

  },
  driverId:{
    type:String,
    required: true
  },

  driverName:{
    type:String,
    required:true
  },

  available:{
    type:Boolean,
  }


});

module.exports = mongoose.model("Bus",busSchema);