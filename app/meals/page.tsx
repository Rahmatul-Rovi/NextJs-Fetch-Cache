import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";

export const metadata: Metadata = {
  title: "All Meals",
  description: "Meals Loaded from MealDB API",
};

  const fetchSingleMeal = async (id) => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await res.json();
            return data.meals || []; 
        } catch (error) {
            console.log("Fetch Error:", error);
            return []; 
        }
    };

    export async function generateMetadata({params}){
      const id= (await params).id;
    
      const singleMeal = await getSinglePost(id);
    
      const previousImages = (await parent).openGraph?.images || []
       
      return{
        title: singleMeal.strMeal,
        description: singlemeal.strInstructions,
      }
    }

export default async function singleMealPage({ params }) {
    // searchParams ke await kora thik ase
    const p = await params;
    const singleMeal = await fetchSingleMeal(p?.id);

  

    const meals = await fetchSingleMeal();

    return (
        <div className="p-5">
            <MealSearchInput />
            
            <div className="mt-5">
                {meals.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {meals.map((meal) => (
                            <div key={meal.idMeal} className="border p-3 rounded">
                                <Image src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover" />
                                <h3 className="font-bold mt-2">{meal.strMeal}</h3>
                                <Link href={`/meals/{singleMeal.idMeal}`}> Details </Link>
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