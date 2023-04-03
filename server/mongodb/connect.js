import mongoose from "mongoose";

const connectDB = (url) => {
    // working with search functionality
    mongoose.set('strictQuery', true);

    // connect the DB
    mongoose.connect(url)
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.log(err));
}

export default connectDB;