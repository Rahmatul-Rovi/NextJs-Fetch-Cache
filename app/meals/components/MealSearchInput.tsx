"use client";
import React, { useEffect, useState } from 'react'

export default function MealSearchInput() {
        const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
     useEffect(() => {
        fetchMeals();
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
