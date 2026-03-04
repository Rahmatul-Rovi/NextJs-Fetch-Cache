import { response } from "express";
import dbConnect from "../../lib/dbConnect";

export async function GET(){
     
   const data = await dbConnect("users").find({}).toArray()

    return Response.Json(data);
}



export async function POST(req){
     
    const postedData = req.body;

    const result = await dbConnect("users").insertOne(postedData)
    return Response.Json(result);
}