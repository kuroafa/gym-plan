"use client";
import { PlanCreation, PlanCreationSchema } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import Hero from "./Main/Hero";
import Image from "next/image";

type Props = {
  showStepNumber: boolean;

};
// step 1 would be for plan basic info
// step 2 would be for user info
// step 3 fitness goal

// step 4 success Result
enum FitnessGoal {
  loseWeight = "LOSE_WEIGHT",
  gainMuscle = "GAIN_MUSCLE",
  improveEndurance = "IMPROVE_ENDURANCE",
}
const stepsArray = ["Step 1", "Step 2", "Step 3"];

const PlanCreationForm = ({ showStepNumber }: Props) => {
  const [step, setStep] = useState("Step 1");
  const [hasPlan, setHasPlan] = useState(false); // Track whether the user has a plan

  // Function to check if the user already has a plan
  const checkUserPlan = async () => {
    try {
      // Make a request to your API to check if the user has a plan
      const response = await fetch("/api/plans"); // Replace with your actual API endpoint
      const data = await response.json();
      if (data.hasPlan) {
        setHasPlan(true);
        router.push("/Dashboard");
        // You can also show a message to the user here
      } else {
        setHasPlan(false);
      }
    } catch (error) {
      console.error("Error checking user plan:", error);
    }
  };

  useEffect(() => {
    checkUserPlan();
  }, []);

  const handleNextStep = () => {
    if (step === "Step 1") setStep("Step 2");
    else if (step === "Step 2") setStep("Step 3");
  };
  const handlePrevStep = () => {
    if (step === "Step 3") setStep("Step 2");
    else if (step === "Step 2") setStep("Step 1");
  };

  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === "Final") {
      return null;
    }
    return (
      <section className="mt-2 mb-4 flex justify-between">
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`p-2 flex justify-center items-center font-semibold rounded-xl cursor-pointer ${
              item === step ? " text-gray-500" : ""
            }`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };

  const router = useRouter();

  const form = useForm<PlanCreation>({
    resolver: zodResolver(PlanCreationSchema),
    defaultValues: {
      planName: "",
      description: "",
      age: 10,
      gender: "",
      weight: 18.0,
      height: 19.0,
      fitnessGoal: FitnessGoal.loseWeight,
    },
  });
  const onSubmit = async (data: PlanCreation) => {
    try {
      const response = await fetch("/api/plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to make Plan");
      }
    } catch (error) {
      console.error("Could not create Plan:", error);
    }
    setStep("Final");
    router.push("/Dashboard");
    router.refresh;
  };

  return (
    <div className="flex justify-center items-center ">
      <Card className="m-5 p-5  bg-slate-200 w-full rounded-lg  ">
        {renderTopStepNumbers()}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="z-[-1] space-y-8"
          >
            {/* // Render Steps */}
            {step === "Step 1" ? (
              <div className="">
                <h2 className="text-xl font-medium py-2">
                  Customize your plan Name & Description
                </h2>
                <div className="flex flex-col gap-[10px] flex-wrap">
                  <FormField
                    control={form.control}
                    name="planName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plan Name</FormLabel>
                        <FormControl>
                          <Input
                            className="border-2"
                            placeholder="plan name..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>this is the plan name</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Describe this plan..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-between pt-5">
                  <Button onClick={handlePrevStep}>Previous</Button>
                  <Button onClick={handleNextStep}>Next</Button>
                </div>
              </div>
            ) : null}
            {step === "Step 2" ? (
              <div>
                {" "}
                <h2 className="text-xl font-medium py-2">
                  Fill out all containers for better results
                </h2>
                <div className="flex flex-col gap-[10px] flex-wrap">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input placeholder="Age..." {...field} />
                        </FormControl>
                        <FormDescription>this is the age</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="this is the gender..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>this is the gender</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="this is the weight..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>this is the weight</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Height</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="this is the Height..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>this is the height</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-between pt-5">
                  <Button onClick={handlePrevStep}>Previous</Button>
                  <Button onClick={handleNextStep}>Next</Button>
                </div>
              </div>
            ) : null}
            {step === "Step 3" ? (
              <div>
                {" "}
                <h2 className="text-xl font-medium py-2">
                  Fill out all containers for better results
                </h2>
                <div className="flex flex-col gap-[10px] flex-wrap">
                  <FormField
                    control={form.control}
                    name="fitnessGoal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fitness Goal</FormLabel>
                        <FormControl>
                          <Input placeholder="plan name..." {...field} />
                        </FormControl>
                        <FormDescription>this is the plan name</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-between items-center pt-5 ">
                  <Button className="" type="submit">
                    Generate Plan
                  </Button>
                  <Button onClick={handlePrevStep}>Previous</Button>
                </div>
              </div>
            ) : null}
            {step === "Final" ? (
              <div>
                <p className="text-center">Thank You for using GYMIFY </p>
              </div>
            ) : null}
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default PlanCreationForm;
