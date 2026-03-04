export async function GET(){
     
    const data = {
        message: "Successfully get Data",
        error: false,
        status: 200
    }

    return Response.Json({data});
}