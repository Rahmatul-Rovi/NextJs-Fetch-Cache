

export default function MealsPage() {


    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            
         // setMeals(data.meals || []); 
        }
        catch (error) {
            console.log(error);
            setMeals([]);
        }
    };

   
  
    return (
        <div className="p-5">
           
            
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