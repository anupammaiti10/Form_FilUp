const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://0.0.0.0/men").then(() => {
  console.log("Connect");
});
let userSchema = new mongoose.Schema({
  Student_Name: String,
  option: String,
  University_Registration_No: Number,
  University_Roll_No: String,
  Mobile_No: String,
  University_Email_No: String,
});

module.exports = mongoose.model("users", userSchema);
// module.exports = connect;
