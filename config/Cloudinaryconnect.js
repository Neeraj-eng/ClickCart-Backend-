import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

let isConfigured = false;

export const Cloudinaryconnect = () => {
  if (isConfigured) {
    console.log("⚡ Cloudinary already configured");
    return;
  }

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  isConfigured = true;
  console.log("✅ Cloudinary configured");
};
