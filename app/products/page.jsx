import React from 'react'

export default function productsPage() {
    const res = await fetch("http://localhost:3000/api/items");
    const data = await res.json();
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
