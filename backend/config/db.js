const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/registration-form-psymate",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`"Database Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
