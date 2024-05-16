import express from "express";
import mongoose from "mongoose";
import authenticationRoutes from "./routes/authentication.js";
import messagesRoutes from "./routes/messages.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected too MongoDB");
  } catch (error) {
    console.log("Cannot connect to MongoDB", error.message);
  }
};
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authenticationRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
