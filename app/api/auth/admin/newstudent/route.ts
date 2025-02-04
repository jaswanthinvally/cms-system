import { StudentModel } from "@/models/StudentSchema";
import ConnectDb from "@/utils/ConnectDb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
   try {

    await ConnectDb()

    const {name,regno,phoneno,email} = await request.json()

    await StudentModel.create({
        name,
        regno,
        phoneno,
        email,
        
    })

    return NextResponse.json({
        status : "user creation sucessful"
    })

   } catch (error) {

    return NextResponse.json({ error : error})
    
   }

    

}