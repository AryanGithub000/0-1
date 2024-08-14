const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.ksc7azv.mongodb.net/user_app_new",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "aryan",
  email: "aryan@gmail.com",
  password: "123",
});

user.save();
