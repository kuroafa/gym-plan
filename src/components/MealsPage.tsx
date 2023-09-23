"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";

import { Button, TextField } from "@mui/material";
import MealList from "./MealList";
import { Interface } from "readline";
import Meal from "./Meal";

type Props = {
  mealData: {
    meals: Array<{
      id: number;
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



const MealsPage = ({mealData}: Props) => {
  const initialMeals = {
    meals: {
      image: '',
      title: 'Initial Meal',
      readyInMinutes: 0,
      servings: 0,
    },
    nutrients: {
      calories: 0,
      carbohydrates: 0,
      fat: 0,
      protein: 0,
    },
  };
  const [meals, setMeals] = useState<Props['mealData']>(initialMeals);
  const [calories, setCalories] = useState(2000);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue, 10);
    setCalories(numericValue);
  };

  const getMealData = async () => {
    await fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=1cc321b004ce4038b51ed5dd929958a8&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
        console.log(data.meals);
      })
      .catch((error) => {
        console.log("error getting meal", error);
      });
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
      <div className="gap-5  px-5 col-span-2 ">  
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
           <TextField
            onChange={handleChange}
            type="number"
            id="outlined-basic"
            label="Calories (e.g 2000)"
            variant="outlined"
            className="w-full"
          />
          <Button
            variant="outlined"
            onClick={getMealData}
            className="sm:text-lg p-0 h-[55px] text-black border-black "
          >
            Daily Meals
          </Button>  
       
        </div>
        <Meal mealData={meals}/>
      </div>

      <div className="">
         <MealList mealData={meals} />
      </div>
    </div>
  );
};

export default MealsPage;
