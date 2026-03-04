import { ObjectId } from "mongodb";
import dbConnect from "../../lib/dbConnect";
export async function GET(req, {params}){
     
   const p = await params;
   const singleData = await dbConnect("users").findOne({_id: new ObjectId(p.id)})

    return Response.Json(singleData);
}



export async function DELETE(req, {params}){
     
   const p = await params;
   console.log(p);

    return Response.Json({params:p});
}



export async function PATCH(req, {params}){
     
   const p = await params;
   console.log(p);

    return Response.Json({params:p});
}