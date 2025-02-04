import { TeacherModel } from "@/models/TeacherSchema";
import ConnectDb from "@/utils/ConnectDb";
import { NextResponse } from "next/server";



export async function POST(request : Response) {
    await ConnectDb()

    const {name,regno,phoneno,email,password}  = request.json()

    await TeacherModel.create({
        name,
        regno,
        phoneno,
        email,
        password

    })
    .then((result) => NextResponse.json({
        status : result 
    }))
    .catch ((err) => NextResponse.json({
        status : err
    }))

} 