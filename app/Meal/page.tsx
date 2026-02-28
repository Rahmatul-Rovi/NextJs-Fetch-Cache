"use client";
import React, { useEffect, useState } from 'react';

export default function MealsPage() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMeals = async () => {
        // Jodi search empty thake tobe default kichu dekhate paro ba call bondho rakhte paro
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            setMeals(data?.meals || []);
        } catch (error) {
            console.error("Fetch error:", error);
            setMeals([]);
        }
    };

    useEffect(() => {
        // Chotto ekta optimization: 3 character er kom hole call korbe na (optional)
        fetchMeals();
    }, [search]);

    return (
        <div className="p-10">
            {/* 1. Search Input Field (Missing chilo) */}
            <div className="mb-8">
                <input 
                    type="text" 
                    placeholder="Search for a meal..." 
                    className="border p-2 rounded w-full max-w-md text-black"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* 2. Grid Layout */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {meals.length > 0 ? (
                    meals.map((singleMeal) => (
                        // 3. Unique key (idMeal) add kora hoyeche
                        <div key={singleMeal.idMeal} className="border p-4 rounded-lg shadow">
                            <img 
                                src={singleMeal.strMealThumb} 
                                alt={singleMeal.strMeal} 
                                className="w-full h-40 object-cover rounded mb-2"
                            />
                            <h2 className='text-xl font-bold'>{singleMeal.strMeal}</h2>
                            <p className="text-sm text-gray-500 line-clamp-3">
                                {singleMeal.strInstructions}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="col-span-4 text-center text-gray-400">No meals found. Try searching something else!</p>
                )}
            </div>
        </div>
    );
}