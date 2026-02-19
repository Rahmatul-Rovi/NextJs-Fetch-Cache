import Link from 'next/link';
import React from 'react';
import style from './post.module.css';

export const getPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function Page() { 
    const posts = await getPosts();
    
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Posts List</h1>
      {posts.map((singlePost) => {
        return (
          <div key={singlePost.id} className="border-b py-2">
            <h2 className="font-semibold text-blue-600"> {singlePost.title} </h2>
            <p className="text-gray-600 testing-purpose-css-class"> {singlePost.body} </p>
            <Link href="/posts/${singlePost.id}">Details</Link>
          </div>
        )
      })}
    </div>
  )
}