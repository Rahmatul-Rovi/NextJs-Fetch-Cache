import React, { useState } from 'react'

export default function MealsPage() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const fetchMeals = async () => {
          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
          const data = await res.json();
          return data.meals;
    }
  return (
    <div>
      
    </div>
  )
}
