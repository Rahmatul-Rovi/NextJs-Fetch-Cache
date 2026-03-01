import { response } from "express";

export async function GET(){
     
    const data = {
        message: "Successfully get Data",
        error: false,
        status: 200
    }

    return Response.Json({data});
}



export async function POST(req){
     
    const postedData = req.body;

    return Response.Json({postedData});
}