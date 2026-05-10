import express from "express";
import serverless from "serverless-http";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "./config/mongoconnect.js";
import { Cloudinaryconnect } from "./config/Cloudinaryconnect.js";
import router from "./routes/Router.js";

dotenv.config();
const app = express();


connect();
Cloudinaryconnect();


app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true, limit: "4mb" }));
app.use(cookieParser());

app.use(fileUpload({
  useTempFiles: false,
}));


app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is running 🚀",
  });
});

app.use("/api", router);


app.listen(process.env.PORT);