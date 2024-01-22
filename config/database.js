const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("strictQuery", false);

  const mongoURL = "mongodb+srv://developer:8kCEOCOQsAkEBoEL@cluster0.adwfsun.mongodb.net/test"; // Replace with your actual MongoDB connection string

  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connect };
