import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/auth.route.js";

//express initialization
const app = express();
dotenv.config(); //using dotenv for the env variable

app.use(express.json()); // middleware to accept the json file transfer

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening to the port ${process.env.PORT}`);
});



