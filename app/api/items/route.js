import { response } from "express";
import dbConnect from "../../lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET(){
     
   const data = await dbConnect("users").find({}).toArray()

    return Response.Json(data);
}



export async function POST(req){
     
    const postedData = req.body;

    const result = await dbConnect("users").insertOne(postedData)
    revalidatePath("/products")
    return Response.Json(result);
}