import MealSearchInput from "./components/MealSearchInput";

export default async function MealsPage({ searchParams }) {
    // searchParams ke await kora thik ase
    const query = await searchParams;
    const searchTerm = query.search || ""; 

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const data = await res.json();
            return data.meals || []; 
        } catch (error) {
            console.log("Fetch Error:", error);
            return []; 
        }
    };

    const meals = await fetchMeals();

    return (
        <div className="p-5">
            <MealSearchInput />
            
            <div className="mt-5">
                {meals.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {meals.map((meal) => (
                            <div key={meal.idMeal} className="border p-3 rounded">
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover" />
                                <h3 className="font-bold mt-2">{meal.strMeal}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No meals found...</p>
                )}
            </div>
        </div>
    );
}