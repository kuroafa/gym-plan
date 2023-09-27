"use client";
import { Plan } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { meals } from "../utils/Data";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  planData: Plan[];
};

const MealSlide = ({ planData }: Props) => {
  const [currentMealIndex, setCurrentMealIndex] = useState(0);
  const [currentFitnessGoal, setCurrentFitnessGoal] = useState("");
  const today = new Date();
  const dayName = today
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase();
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
  const hasPlanToday = planData.some((plan) => plan.day === dayName);
  return (
    <div>
      <div className="rounded-[30px]  p-3">
        {hasPlanToday ? (
          <>
            <div className="grid grid-cols-1 gap-2">
              {planData.map((plan) => {
                return (
                  <div key={plan.id}>
                    {plan.day === dayName && (
                      <div>
                        <h2 className="text-xl font-semibold">
                          Today is{" "}
                          <span className="bg-indigo-200 text-black rounded-[30px] px-2">
                            {plan.day}
                          </span>{" "}
                          You&apos;ll be doing{" "}
                          <span className="border-b  border-black">
                            {plan.fitnessGoals.replace("_", " ")}
                          </span>
                        </h2>
                        <p className="font-bold mt-2 mb-2">
                          Here&apos;s your recommended meals{" "}
                          <span className="bg-indigo-200 rounded-full text-lg px-2">
                            !
                          </span>
                        </p>
                        <div className="flex">
                          {meals
                            .filter(
                              (meal) => meal.fitnessGoal === plan.fitnessGoals
                            )
                            .map((meal, index) => (
                              <div
                                className="bg-black bg-opacity-80 rounded-[30px]   top-0 left-0  "
                                key={index}
                              >
                                {index === currentMealIndex && (
                                  <div
                                    className="h-80 relative w-full gap-5"
                                    style={{
                                      backgroundImage: `url(${meal.image})`,
                                      backgroundSize: "cover",
                                      backgroundPosition: "center",
                                      backgroundRepeat: "no-repeat",
                                      padding: "20px",
                                      borderRadius: "30px",
                                    }}
                                  >
                                    <div
                                      className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[30px]"
                                      style={{ zIndex: 1 }}
                                    ></div>
                                    <div className="p-2 relative z-10">
                                      <div className="text-white p-1">
                                        <h2 className="md:text-3xl text-2xl font-bold">
                                          {meal.name}
                                        </h2>
                                        <p>{meal.description}</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="flex -mt-5 ">
                <div
                  className="bg-indigo-500 text-white rounded-[30px] p-2 mr-2"
                  onClick={previousMeal}
                >
                  <ArrowLeft />
                </div>
                <div
                  className="bg-indigo-500 text-white rounded-[30px] p-2"
                  onClick={nextMeal}
                >
                  <ArrowRight />
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-xl font-medium">
            Create a plan for today to get meal recommendations!
          </h1>
        )}
      </div>
    </div>
  );
};

export default MealSlide;
