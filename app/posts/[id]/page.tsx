import React from 'react'

export const getSinglePost = async (post_id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function generateMetadata({params}){
  const id= (await params).id;

  const singlePost = await getSinglePost(id);

  const previousImages = (await parent).openGraph?.images || []
   
  return{
    title: singlePost.title,
    description: singlePost.body,
  }
}


export default async function SinglePost({params}) {
    const p = await params;
    const singlePost = await getSinglePost(p.id)
    return (
      <div className="p-10">
        <h2 className="text-2xl">Single Post ID: {JSON.stringify(singlePost)}</h2>
        <h1>{singlePost.title}</h1>
        <p>{singlePost.body}</p>
      </div>
    )
}