"use client";
import React, { useEffect, useState } from 'react'

export default function MealsPage() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const fetchMeals = async () => {
        try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
       const data = await res.json();
       setMeals(data?.meals || []);
       return data.meals;
        }
        catch (error){
     console.log(error);
     return [];
        }
      
    };

    useEffect(() => {
        fetchMeals();

    }, [search]);
  return (
    <div className='grid grid-cols-4 gap-4'>
        {meals?.map((singleMeal)=> {
          return(
              <div>
              <p className='text-2xl font-bold'>{singleMeal?.strMeal}</p>
              <p>{singleMeal?.strInstructions}</p>
            </div>
        })
          )  }
   
    </div>
  )
}
