"use server";

export const postSingleData = async(data) => {
    try {
         const p = await params;
   const postedData = await req.json()
   const filter = {_id: new ObjectId(p.id)};
   const updatedResponse = await dbConnect("users").updateOne(filter, {$set: {...postedData}}, {upsert: true})

    return Response.Json(updatedResponse);
    } catch (error) {
        console.log(error)
        return null
    }
  
}
