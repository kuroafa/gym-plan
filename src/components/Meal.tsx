import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  mealData: {
    meals: Array<{
      id: string;
      image: string;
      title: string;
      readyInMinutes: number;
      servings: number;
      sourceUrl: string;
    }>;
    nutrients: {
      calories: number;
      carbohydrates: number;
      fat: number;
      protein: number;
    };
  };
};

const Meal = ({ mealData }: Props) => {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchMealImages = async () => {
      const imageUrls = await Promise.all(
        mealData.meals.map(async (meal) => {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=1cc321b004ce4038b51ed5dd929958a8&includeNutrition=false`,
            {
              method: "GET",
            }
          );
          const data = await response.json();
          return data.image;
        })
      );

      setImgUrls(imageUrls);
    };

    fetchMealImages();
  }, [mealData.meals]);

  if (!Array.isArray(mealData.meals)) {
    return <div>No meal data available.</div>;
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-3">
      {mealData.meals.map((meal, index) => (
        <div key={index}>
          <img
            className=" rounded-xl shadow-2xl border"
            alt={meal.title}
            src={imgUrls[index]}
          />
          <h1 className="text-2xl">{meal.title}</h1>
          <p>Ready In Minutes: {meal.readyInMinutes}</p>
          <div className="flex justify-between items-center">
            <p>Servings: {meal.servings}</p>

            <a href={meal.sourceUrl}>Recipe </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meal;
