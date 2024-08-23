const mongoose = require("mongoose");
require('dotenv').config()

exports.ConnectDB = async () => {
  await mongoose.connect(
    process.env.MONGO_URL 
  );
  console.log(`the db is connect with ${mongoose.connection.host}`);
};
