import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log("MongoDB connected succwssfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // stop the server if connection fails
  }
};

export default connectDB;