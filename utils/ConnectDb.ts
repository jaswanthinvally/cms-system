import mongoose from "mongoose";
import { NextResponse } from "next/server";

export default async function ConnectDb() {
  try {
    console.log("this the url : ", process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo db connection successful"); 
  } catch (error) {
    return NextResponse.json({
      status: "Database connection failed", 
      error: error.message 
    }, { status: 500 }); // Return 500 status code for server error
  }
}