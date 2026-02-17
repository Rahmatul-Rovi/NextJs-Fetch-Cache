"use client";
import React, { useEffect, useState } from 'react'

export default function MealsPage() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            
            setMeals(data.meals || []); 
        }
        catch (error) {
            console.log(error);
            setMeals([]);
        }
    };

    useEffect(() => {
        fetchMeals();
    }, [search]); 
  
    return (
        <div className="p-5">
            <input 
                type="text" 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search meals..."
                className="border p-2 mb-4 text-black"
            />
            
            <div>
                {meals.length > 0 ? (
                    <p>{JSON.stringify(meals)}</p>
                ) : (
                    <p>No meals found...</p>
                )}
            </div>
        </div>
    );
}