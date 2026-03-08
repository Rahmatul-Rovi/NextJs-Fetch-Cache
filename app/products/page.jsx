import { redirect } from 'next/navigation';
import React from 'react'

export default function productsPage() {
    // const res = await fetch("http://localhost:3000/api/items", {
    //   cache: "force-cache",
    // });
    // const data = await res.json();
   
 const data = await dbConnect("practice_data").find({}).toArray();
  
  return (
    <ul>
      {
        data?.map((singlePost) => {
          return <li key={singleProduct._id}>{singleProduct?.productName}</li>
        })
      }
      <p>{JSON.stringify(data)}</p>
    </ul>
  )
}
