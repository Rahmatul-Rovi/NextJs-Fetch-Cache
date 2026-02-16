import React from 'react'

export const getPosts = async() => {
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
return data;
}

export default async function page() {
    const posts = await getPosts();
  return (
    <div>
     <p>{JSON.stringify(posts)}</p>
    </div>
  )
}
