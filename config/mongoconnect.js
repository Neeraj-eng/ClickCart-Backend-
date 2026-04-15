import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let cached = global.mongoose || { conn: null, promise: null };

export const connect = async () => {
  if (cached.conn) {
    console.log("⚡ Using existing DB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGO_URL);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;

  console.log("✅ MongoDB connected");
  return cached.conn;
};