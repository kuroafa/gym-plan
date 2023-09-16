'use client'
import { Workout } from '@prisma/client';
import { useRouter } from 'next/navigation'; // Use 'next/router' instead of 'next/navigation'
import React, { useState, useEffect } from 'react'; // Add 'useEffect' import
import { Card } from '../ui/card';
import { ExerciseType } from '@prisma/client'; // Import the ExerciseType enum
import { ClipboardEdit, Plus } from 'lucide-react';

type Props = {
  workoutData: Workout[]; // Allow workoutData to be null
};

const WorkoutPage = ({ workoutData }: Props) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [workouts, setWorkouts] = useState<Workout[]>([]); // Specify the type for 'workouts'
  type GroupedWorkouts = { [key in ExerciseType]: Workout[] };

  // Group workouts by exerciseType
  const groupedWorkouts: GroupedWorkouts = workoutData.reduce((groups, workout) => {
    if (!groups[workout.exerciseType]) {
      groups[workout.exerciseType] = [];
    }
    groups[workout.exerciseType].push(workout);
    return groups;
  }, {} as GroupedWorkouts);

  return (
    <div>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-5'>
      {Object.entries(groupedWorkouts).map(([type, workouts]) => (
          <div className="flex flex-col gap-2" key={type}>
            <h2 className='text-3xl font-bold'>{type}</h2>
            {workouts.map((work) => (
              <Card className="flex justify-between p-2" key={work.id}>
                <div className='flex flex-col gap-5'>
                    <div>
                        <div className="lg:text-xl font-medium">
                          {work.workOutName?.split(":").map((part, index) => (
                            <React.Fragment key={index}>
                              {index > 0 && <br />}{" "}
                              {/* Add <br> after the first part */}
                              {part}
                            </React.Fragment>
                          ))}
                        </div>
                        <h2 className='lg:text-lg'>Set: {work.sets}</h2>
                        <h2 className='lg:text-lg'>Each Set: {work.numberPerSet}</h2>
                        <h2 className=''>{work.description}</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                    <Plus size={40} className='text-green-600  font-bold' />
                    <ClipboardEdit size={30} />
                    </div>
                </div>
                {/* <img className="w-40 rounded-lg" src="/dumbbells.jpg" alt="weights" /> */}
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
