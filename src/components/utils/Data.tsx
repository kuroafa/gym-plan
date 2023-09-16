const muscleBuildingWorkouts = [
    {
      exercise: "Push-Ups",
      description:
        "Push-ups are a great bodyweight exercise for your chest, shoulders, and triceps. Get into a plank position and lower your body by bending your arms, then push back up.",
      sets: 3,
      image: 'pushupman.svg',
      reps: 15,
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Bodyweight Squats",
      description:
        "Bodyweight squats are effective for targeting your quadriceps, hamstrings, and glutes. Stand with your feet shoulder-width apart and lower your body by bending your knees.",
      sets: 3,
      reps: 15,
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Plank",
      description:
        "The plank is an excellent core-strengthening exercise. Get into a push-up position but with your forearms on the ground, and hold your body in a straight line.",
      sets: 3,
      reps: "Hold for 30 seconds",
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Lunges",
      description:
        "Lunges can be done without weights for leg development. Step forward with one leg and lower your body until both knees are bent at 90 degrees. Alternate legs.",
      sets: 3,
      reps: "12 each leg",
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Chair Dips",
      description:
        "Chair dips are a variation of dips that can be done using a sturdy chair. Sit on the edge of the chair, place your hands beside your hips, and lower your body by bending your arms.",
      sets: 3,
      reps: 12,
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Burpees",
      description:
        "Burpees provide a full-body workout. Start in a standing position, then squat, kick your feet back into a push-up position, return your feet to the squat position, and jump up.",
      sets: 3,
      reps: 10,
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Mountain Climbers",
      description:
        "Mountain climbers are excellent for cardiovascular fitness and core strength. Start in a plank position and alternate bringing your knees towards your chest as if you're climbing a mountain.",
      sets: 3,
      reps: "20 each leg",
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Bodyweight Rows",
      description:
        "Bodyweight rows are a great back and bicep exercise. You can use a sturdy horizontal bar or a TRX system. Lie under the bar, grab it, and pull your chest up towards the bar.",
      sets: 3,
      reps: 12,
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Jumping Jacks",
      description:
        "Jumping jacks are a simple and effective full-body exercise. Start with your feet together and arms at your sides. Jump while spreading your legs and raising your arms overhead.",
      sets: 3,
      reps: "30 seconds",
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Bodyweight Calf Raises",
      description:
        "Calf raises can be done without weights. Stand with your feet hip-width apart, raise your heels as high as possible, and lower them back down. Repeat.",
      sets: 3,
      reps: 20,
      restTime: 30,
      atHome: true,
    },
    {
      exercise: "Wall Sits",
      description:
        "Wall sits are great for strengthening your quads. Lean against a wall with your feet shoulder-width apart and slide down until your thighs are parallel to the ground. Hold.",
      sets: 3,
      reps: "Hold for 30 seconds",
      restTime: 30,
      atHome: true,
    },
   
  ];
// gym workout
  const GymBuildingWorkouts = [
    {
      exercise: "Bench Press",
      description:
        "The bench press is a classic chest exercise. Lie on a bench, lower the barbell to your chest, and push it back up. It targets your chest, shoulders, and triceps.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Leg Press",
      description:
        "The leg press machine is excellent for working your lower body, especially your quadriceps, hamstrings, and glutes. Load the machine and press the weight upward with your legs.",
      sets: 4,
      reps: 10,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Lat Pulldown",
      description:
        "The lat pulldown machine targets your back and biceps. Sit down, grab the bar, and pull it down to your chest. Slowly release the bar upward.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Leg Curl Machine",
      description:
        "The leg curl machine is great for isolating your hamstrings. Lie face down on the machine, curl your legs upward, and then lower them back down.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Seated Row Machine",
      description:
        "The seated row machine works your back and biceps. Sit down, grab the handles, and pull them towards your torso. Slowly release the handles forward.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Shoulder Press Machine",
      description:
        "The shoulder press machine targets your shoulders and triceps. Sit down, grab the handles, and press the weight upward. Slowly lower it back down.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Leg Extension Machine",
      description:
        "The leg extension machine isolates your quadriceps. Sit down, place your legs under the pads, and extend them outward. Slowly return to the starting position.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Cable Bicep Curls",
      description:
        "Cable bicep curls are great for targeting your biceps. Attach a straight bar to the cable machine, grab it, and curl it upward. Slowly lower it back down.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Tricep Pushdown Machine",
      description:
        "The tricep pushdown machine works your triceps. Attach a V-bar to the cable machine, grab it, and push it downward. Slowly release it upward.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    // You can add more gym-based workouts here
  ];
  // outdoor workouts
  const LongListOutdoorParkWorkouts = [
    {
      exercise: "Push-Ups",
      description:
        "Perform push-ups to work your chest, shoulders, and triceps. Use a park bench or the ground as your base.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Bodyweight Squats",
      description:
        "Bodyweight squats help strengthen your legs. Stand with your feet shoulder-width apart and squat down as if sitting in a chair.",
      sets: 4,
      reps: 10,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Pull-Ups",
      description:
        "Find a sturdy horizontal bar at the park for pull-ups to target your back and biceps.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Lunges",
      description:
        "Perform lunges to work your legs and improve balance. Take a step forward and lower your body until both knees are bent at a 90-degree angle.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Park Bench Dips",
      description:
        "Use a park bench for tricep dips. Sit on the edge of the bench with your hands beside you, and lower your body down and back up.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Box Jumps",
      description:
        "Find a sturdy surface or park bench for box jumps to improve leg strength and explosiveness.",
      sets: 4,
      reps: 10,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Plank",
      description:
        "Perform planks on the grass or a yoga mat to work your core muscles and improve stability.",
      sets: 4,
      reps: "30 seconds (hold)",
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Jumping Jacks",
      description:
        "Perform jumping jacks on an open area of grass to elevate your heart rate and improve overall fitness.",
      sets: 4,
      reps: 20,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Sprint Intervals",
      description:
        "Mark a distance in the park and do sprint intervals to work on speed and cardiovascular fitness.",
      sets: 6,
      reps: "30 seconds sprint, 60 seconds rest",
      atHome: false,
    },
    {
      exercise: "Bicycle Crunches",
      description:
        "Lie on the grass and do bicycle crunches to target your abs and obliques.",
      sets: 4,
      reps: "20 (10 per side)",
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Park Bench Step-Ups",
      description:
        "Use a park bench for step-ups to strengthen your legs and get a cardio workout.",
      sets: 4,
      reps: "12 (each leg)",
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Mountain Climbers",
      description:
        "Perform mountain climbers on the grass to engage your core, legs, and cardiovascular system.",
      sets: 4,
      reps: "20 (10 per leg)",
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Park Bench Leg Raises",
      description:
        "Hold onto a park bench and do leg raises to work your lower abs and hip flexors.",
      sets: 4,
      reps: "12 (each leg)",
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Park Bench Push-Ups",
      description:
        "Use a park bench for incline push-ups to target your chest and shoulders.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    }
  ];
  
  const RandomWorkouts = [
    {
      exercise: "Plank",
      image: 'Plank.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
      {
        exercise: "Stability ball pull ins",
        image: 'stability.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Bosu ball crunch",
        image: 'ballcrun.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Laying flat bench raises",
        image: 'benchraises.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Laying leg raises",
        image: 'layingleg.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Elbow plank",
        image: 'elbowplank.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Hollow Hold",
        image: 'hollowhold.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Ball Crunch",
        image: 'ballcrunch.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Wipers",
        image: 'Wipers.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Laying flat leg raises",
        image: 'layingflatlegraisies.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Otis up",
        image: 'otisup.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Laying flat leg raises",
        image: 'layingflatlegraisies.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Landmines",
        image: 'landmin.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
      {
        exercise: "Hanging leg raises",
        image: 'hanginglegraise.png',
        sets: 4,
        reps: 12,
        restTime: 60,
        atHome: false,
      },
  ];

  export  {muscleBuildingWorkouts, GymBuildingWorkouts, LongListOutdoorParkWorkouts, RandomWorkouts}