import StudentModel from "@/models/StudentSchema";
import ConnectDb from "@/utils/ConnectDb";


import { NextResponse } from "next/server";


export async function POST(request : Request) {
  try {

    await ConnectDb()

    const {name,regno,phoneno,email,password} = await request.json()


    await StudentModel.create({
        name : name,
        regno : regno,
        phoneno : phoneno,
        email : email,
        password : password

    })

    return NextResponse.json({
        status : "user creation sucessful",        

    })
    
  } catch (error) {
    return NextResponse.json({status : error})
  }
    

}