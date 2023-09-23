import React from 'react'


type Props = {
  mealData: {
       meals: Array<{
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
  }
};

const MealList = ({mealData}: Props) => {
  const nutrients = mealData?.nutrients;
  return (
    <div>
      <h1 className='text-5xl font-medium'>Nutrients</h1>
      <ul className='flex flex-col gap-1 mt-1 text-2xl'>
        <li>Calories : {nutrients?.calories.toFixed(0)}</li>
        <li>Carbohydrates : {nutrients?.carbohydrates.toFixed(0)}</li>
        <li>Fat : {nutrients?.fat.toFixed(0)}</li>
        <li>Protein : {nutrients?.protein.toFixed(0)}</li>
      </ul>
    </div>
  )
}

export default MealList