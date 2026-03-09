"use server";

import dbConnect from "@/lib/dbConnect";
export const registerUser = async(payLoad) => {
const result = await dbConnect("nextjs_app").insertOne(payLoad);
}