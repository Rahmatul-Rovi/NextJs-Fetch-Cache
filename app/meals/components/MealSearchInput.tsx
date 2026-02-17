"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function MealSearchInput() {
       // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

     useEffect(() => {
        const searchQuery = {search};
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);

    }, [search]); 
  return (
    <div>
       <input 
                type="text" 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search meals..."
                className="border p-2 mb-4 text-black"
            />
    </div>
  )
}
