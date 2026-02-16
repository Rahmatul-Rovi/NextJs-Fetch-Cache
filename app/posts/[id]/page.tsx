import React from 'react'

export default async function SinglePost({params}) {
    const p = await params;
    console.log(p.id);
  return (
    <div>
      
    </div>
  )
}
