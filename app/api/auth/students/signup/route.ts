import ConnectDb from "@/utils/ConnectDb";
import { NextResponse } from "next/server";
import { StudentModel } from "@/models/StudentSchema";

export async function POST(request : Request) {

    try {
       await ConnectDb()
       const {email,password} = await request.json()

       StudentModel.create ({
        email,
        password
       })
       
    } catch (error) {

        return NextResponse.json({
            status : error
        })
        
    }




}