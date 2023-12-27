const mongoose = require("mongoose");
const config = require("config");


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1); //Exit process with failure
  }
};

module.exports = connectDB;
