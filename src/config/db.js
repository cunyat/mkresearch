const mongoose = require("mongoose");

const connectDB = async (callback) => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  if (callback) callback();
};

module.exports = connectDB;
