import RecommendedWorkouts from "@/components/dashboard/RecommendedWorkouts";
import BuildingMuscle from "@/components/dashboard/BuildingMuscle";
import { meals } from "@/components/utils/Data";
import GymWorkout from "@/components/dashboard/GymWorkout";
import { Plan } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Props = {
  planData: Plan[];
};

const today = new Date();
const dayName = today
  .toLocaleDateString("en-US", { weekday: "long" })
  .toUpperCase();

const HerotabTwo = ({ planData }: Props) => {
  const [currentMealIndex, setCurrentMealIndex] = useState(0);
  const [currentFitnessGoal, setCurrentFitnessGoal] = useState("");

  useEffect(() => {
    // Find the current fitness goal based on the selected planData
    const currentPlan = planData.find((plan) => plan.day === dayName);
    if (currentPlan) {
      setCurrentFitnessGoal(currentPlan.fitnessGoals);
    }
  }, [planData, dayName]);

  const nextMeal = () => {
    // Filter meals by the current fitness goal
    const filteredMeals = meals.filter(
      (meal) => meal.fitnessGoal === currentFitnessGoal
    );

    // Calculate the next meal index in a circular manner
    setCurrentMealIndex((prevIndex) => (prevIndex + 1) % filteredMeals.length);
  };

  const previousMeal = () => {
    const filteredMeals = meals.filter(
      (meal) => meal.fitnessGoal === currentFitnessGoal
    );
    setCurrentMealIndex(
      (prevIndex) => (prevIndex - 1 + meals.length) % filteredMeals.length
    );
  };

  return (
    <div className="flex flex-col -ml-5  gap-5">
      <div className=" p-3 rounded-[30px] bg-slate-100">
        {" "}
        <div className="gap-3 rounded-[20px] py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <Link
            href="/WorkoutsPage"
            className=" flex items-center gap-2 sm:text-xl hover:bg-black hover:text-white  bg-lime-200 text-black rounded-[30px] justify-center font-bold py-3 px-10"
          >
            View all workouts
            <ChevronRight />
          </Link>
          <button type="button">
            <GymWorkout />
          </button>

          <button type="button">
            <BuildingMuscle />
          </button>
        </div>
        <h2 className="text-3xl font-bold">Recommended workouts</h2>
        <p>Workouts Tailored to your plan of the day</p>
        <RecommendedWorkouts planData={planData} />
      </div>
    </div>
  );
};

export default HerotabTwo;
