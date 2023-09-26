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
    // {
    //   exercise: "Bench Press",
     
    //   description:
    //     "The bench press is a classic chest exercise. Lie on a bench, lower the barbell to your chest, and push it back up. It targets your chest, shoulders, and triceps.",
    //   sets: 4,
    //   reps: 12,
    //   restTime: 60,
    //   atHome: false,
    // },
    // {
    //   exercise: "Leg Press",
    //   description:
    //     "The leg press machine is excellent for working your lower body, especially your quadriceps, hamstrings, and glutes. Load the machine and press the weight upward with your legs.",
    //   sets: 4,
    //   reps: 10,
    //   restTime: 60,
    //   atHome: false,
    // },
    {
      exercise: "Lat Pulldown",
      image:'latpulldown.png',
      description:
        "The lat pulldown machine targets your back and biceps. Sit down, grab the bar, and pull it down to your chest. Slowly release the bar upward.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Leg Curl Machine",
      image:'legcurl.png',
      description:
        "The leg curl machine is great for isolating your hamstrings. Lie face down on the machine, curl your legs upward, and then lower them back down.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Seated Row Machine",
      image:'seatedrow.png',
      description:
        "The seated row machine works your back and biceps. Sit down, grab the handles, and pull them towards your torso. Slowly release the handles forward.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Shoulder Press Machine",
      image:'shoulderpress.png',
      description:
        "The shoulder press machine targets your shoulders and triceps. Sit down, grab the handles, and press the weight upward. Slowly lower it back down.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Leg Extension Machine",
      image:'legextention.webp',
      description:
        "The leg extension machine isolates your quadriceps. Sit down, place your legs under the pads, and extend them outward. Slowly return to the starting position.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Cable Bicep Curls",
      image:'cablebicepscurls.png',
      description:
        "Cable bicep curls are great for targeting your biceps. Attach a straight bar to the cable machine, grab it, and curl it upward. Slowly lower it back down.",
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Tricep Pushdown Machine",
      image:'tricepspushdown.png',
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
      description: "The plank is a core-strengthening exercise that involves holding a push-up-like position with your arms straight and body in a straight line from head to heels. It targets the abdominal muscles, back, and shoulders.",
      image: 'Plank.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Stability Ball Pull Ins",
      description: "Stability ball pull-ins are an effective exercise for working the lower abdominal muscles. You use a stability ball to bring your knees toward your chest while maintaining a plank-like position.",
      image: 'stability.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Bosu Ball Crunch",
      description: "Bosu ball crunch is an exercise that involves using a Bosu ball to perform crunches, which primarily target the abdominal muscles. It adds an element of balance and stability training.",
      image: 'ballcrun.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Laying Flat Bench Raises",
      description: "Laying flat bench raises are an effective exercise for targeting the lower abdominal muscles. You lie on a flat bench and raise your legs, engaging your lower abs.",
      image: 'benchraises.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Laying Leg Raises",
      description: "Laying leg raises are a lower abdominal exercise where you lie on your back and lift your legs while keeping them straight. This exercise helps strengthen the lower abs.",
      image: 'layingleg.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Elbow Plank",
      description: "The elbow plank is a core-strengthening exercise similar to the standard plank but with your weight supported on your forearms. It targets the abs, back, and shoulders.",
      image: 'elbowplank.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Hollow Hold",
      description: "The hollow hold is an exercise that involves lying on your back and lifting your legs and upper body off the ground, creating a 'hollow' position. It engages the entire core.",
      image: 'hollowhold.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Ball Crunch",
      description: "Ball crunches involve using an exercise ball to support your lower back while performing crunches. This exercise targets the abdominal muscles and adds an element of instability.",
      image: 'ballcrunch.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Wipers",
      description: "Wipers are an advanced core exercise performed while hanging from a pull-up bar. You swing your legs from side to side, engaging the obliques and lower abs.",
      image: 'Wipers.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Laying Flat Leg Raises",
      description: "Laying flat leg raises are similar to laying leg raises but with your legs extended flat on the ground. This exercise targets the lower abdominal muscles.",
      image: 'layingflatlegraisies.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Otis Up",
      description: "Otis up is a core-strengthening exercise that involves lying on your back, lifting your legs, and reaching for your toes. It targets the upper and lower abdominal muscles.",
      image: 'otisup.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Landmines",
      description: "Landmines are a weightlifting exercise that targets the obliques and core muscles. You use a barbell and perform a twisting motion with controlled weight.",
      image: 'landmin.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
    {
      exercise: "Hanging Leg Raises",
      description: "Hanging leg raises are an advanced abdominal exercise performed while hanging from a pull-up bar. You raise your legs to work the lower abdominal muscles.",
      image: 'hanginglegraise.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
    },
  ];
  const fitnessGoals = {
    LEG_DAY: 'LEG_DAY',
    BACK_DAY: 'BACK_DAY',
    SHOULDERS_DAY: 'SHOULDERS_DAY',
    CHEST_DAY: 'CHEST_DAY',
    ARMS_DAY: 'ARMS_DAY',
    CARDIO: 'CARDIO',
    STRENGTH_TRAINING: 'STRENGTH_TRAINING',
    FLEXIBILITY: 'FLEXIBILITY',
    BALANCE_TRAINING: 'BALANCE_TRAINING',
  };
  const allWorkouts = [
    {
      exercise: 'Push-Ups',
      description: 'Push-ups are a great bodyweight exercise for your chest, shoulders, and triceps...',
      sets: 3,
      reps: 15,
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.CHEST_DAY,
    },
    {
      exercise: 'Bodyweight Squats',
      description: 'Bodyweight squats are effective for targeting your quadriceps, hamstrings, and glutes...',
      sets: 3,
      reps: 15,
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Plank',
      description: 'The plank is an excellent core-strengthening exercise...',
      sets: 3,
      reps: 'Hold for 30 seconds',
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.STRENGTH_TRAINING,
    },
    {
      exercise: 'Lunges',
      description: 'Lunges can be done without weights for leg development...',
      sets: 3,
      reps: '12 each leg',
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Chair Dips',
      description: 'Chair dips are a variation of dips that can be done using a sturdy chair...',
      sets: 3,
      reps: 12,
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.ARMS_DAY,
    },
    {
      exercise: 'Burpees',
      description: 'Burpees provide a full-body workout...',
      sets: 3,
      reps: 10,
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.CARDIO,
    },
    {
      exercise: 'M/ Climbers',
      description: 'Mountain climbers are excellent for cardiovascular fitness and core strength...',
      sets: 3,
      reps: '20 each leg',
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.CARDIO,
    },
    {
      exercise: 'Bodyweight Rows',
      description: 'Bodyweight rows are a great back and bicep exercise...',
      sets: 3,
      reps: 12,
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.BACK_DAY,
    },
    {
      exercise: 'Jumping Jacks',
      description: 'Jumping jacks are a simple and effective full-body exercise...',
      sets: 3,
      reps: '30 seconds',
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.CARDIO,
    },
    {
      exercise: 'Calf Raises',
      description: 'Calf raises can be done without weights...',
      sets: 3,
      reps: 20,
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Wall Sits',
      description: 'Wall sits are great for strengthening your quads...',
      sets: 3,
      reps: 'Hold for 30 seconds',
      restTime: 30,
      atHome: true,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Bench Press',
      description: 'The bench press is a classic chest exercise...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.CHEST_DAY,
    },
    {
      exercise: 'Leg Press',
      description: 'The leg press machine is excellent for working your lower body...',
      sets: 4,
      reps: 10,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Lat Pulldown',
      description: 'The lat pulldown machine targets your back and biceps...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.BACK_DAY,
    },
    {
      exercise: 'Leg Curl',
      description: 'The leg curl machine is great for isolating your hamstrings...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Seated Row ',
      description: 'The seated row machine works your back and biceps...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.BACK_DAY,
    },
    {
      exercise: 'Shoulder Press',
      description: 'The shoulder press machine targets your shoulders and triceps...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.SHOULDERS_DAY,
    },
    {
      exercise: 'Leg Extension ',
      description: 'The leg extension machine isolates your quadriceps...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Bicep Curls',
      description: 'Cable bicep curls are great for targeting your biceps...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.ARMS_DAY,
    },
    {
      exercise: 'Tricep Pushdown ',
      description: 'The tricep pushdown machine works your triceps...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.ARMS_DAY,
    },
    {
      exercise: 'Push-Ups',
      description: 'Perform push-ups to work your chest, shoulders, and triceps...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.CHEST_DAY,
    },
    {
      exercise: 'Squats',
      description: 'Bodyweight squats help strengthen your legs...',
      sets: 4,
      reps: 10,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Pull-Ups',
      description: 'Find a sturdy horizontal bar at the park for pull-ups...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.BACK_DAY,
    },
    {
      exercise: 'Lunges',
      description: 'Perform lunges to work your legs and improve balance...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: ' Bench Dips',
      description: 'Use a park bench for tricep dips...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.ARMS_DAY,
    },
    {
      exercise: 'Box Jumps',
      description: 'Find a sturdy surface or park bench for box jumps...',
      sets: 4,
      reps: 10,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Jumping Jacks',
      description: 'Perform jumping jacks on an open area of grass...',
      sets: 4,
      reps: 20,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.CARDIO,
    },
    {
      exercise: 'Sprint Intervals',
      description: 'Mark a distance in the park and do sprint intervals...',
      sets: 6,
      reps: '30 seconds sprint, 60 seconds rest',
      atHome: false,
      fitnessGoal: fitnessGoals.CARDIO,
    },
    {
      exercise: 'Bicycle Crunches',
      description: 'Lie on the grass and do bicycle crunches...',
      sets: 4,
      reps: '20 (10 per side)',
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.STRENGTH_TRAINING,
    },
    {
      exercise: 'Bench Step-Ups',
      description: 'Use a park bench for step-ups...',
      sets: 4,
      reps: '12 (each leg)',
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.LEG_DAY,
    },
    {
      exercise: 'Mountain Climbers',
      description: 'Perform mountain climbers on the grass...',
      sets: 4,
      reps: '20 (10 per leg)',
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.STRENGTH_TRAINING,
    },
    {
      exercise: 'Bench Leg Raises',
      description: 'Hold onto a park bench and do leg raises...',
      sets: 4,
      reps: '12 (each leg)',
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.STRENGTH_TRAINING,
    },
    {
      exercise: ' Bench Push-Ups',
      description: 'Use a park bench for incline push-ups...',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      fitnessGoal: fitnessGoals.CHEST_DAY,
    },
  ]
  export const motivationalPhrases = [
    "Never give up, ",
    "Believe in yourself, ",
    "Dream big, ",
    "Stay positive, ",
    "Work hard, ",
    "Embrace challenges, ",
    "Stay focused, ",
    "Find your passion, ",
    "Push your limits, ",
    "Stay determined, ",
    "Learn from failures, ",
    "Make it happen, ",
  ];

  export const fitnessGoalTips: { [key: string]: string } = {
    CARDIO: "Mix up your cardio routine to prevent boredom, and gradually increase intensity for cardiovascular fitness.",
    ARMS_DAY: "Balance bicep and tricep exercises, and maintain controlled movements for effective arm training.",
    BACK_DAY: "Engage your back muscles with compound exercises like rows and pull-ups, and prioritize good posture.",
    BALANCE_TRAINING: "Work on balance exercises like single-leg squats or yoga poses to enhance stability.",
    CHEST_DAY: "Use a full range of motion during chest exercises, and include both pressing and fly movements for chest development.",
    FLEXIBILITY: "Incorporate dynamic stretches before workouts and static stretches after workouts to improve flexibility.",
    LEG_DAY: "Focus on proper form to avoid injury, and don't skip leg day for a balanced physique.",
    SHOULDERS_DAY: "Warm up your shoulder joints, and avoid lifting too heavy to prevent shoulder strain.",
    STRENGTH_TRAINING: "Focus on progressive overload by increasing weights or resistance gradually to build strength."
  };
  export const meals = [
    // LEG_DAY
    {
      name: "Grilled Chicken and Sweet Potato",
      description: "Grilled chicken breast with roasted sweet potatoes. A protein-packed meal to fuel leg workouts.",
      fitnessGoal: "LEG_DAY",
    },
    {
      name: "Quinoa and Black Bean Stuffed Peppers",
      description: "Bell peppers stuffed with quinoa, black beans, and vegetables. Provides energy for leg-focused training.",
      fitnessGoal: "LEG_DAY",
    },
    {
      name: "Salmon with Asparagus",
      description: "Baked or grilled salmon with steamed asparagus. Omega-3s for joint health on leg day.",
      fitnessGoal: "LEG_DAY",
    },
    {
      name: "Chickpea and Spinach Curry",
      description: "A hearty chickpea and spinach curry with brown rice. Plant-based protein for leg strength.",
      fitnessGoal: "LEG_DAY",
    },
    {
      name: "Turkey and Quinoa Stuffed Bell Peppers",
      description: "Ground turkey and quinoa stuffed bell peppers. Lean protein and complex carbs for leg day.",
      fitnessGoal: "LEG_DAY",
    },
  
    // BACK_DAY
    {
      name: "Grilled Salmon and Quinoa",
      description: "Grilled salmon fillet with quinoa. Protein and healthy fats to support back workouts.",
      fitnessGoal: "BACK_DAY",
    },
    {
      name: "Chicken and Broccoli Alfredo",
      description: "Chicken and broccoli alfredo pasta. A creamy and satisfying meal for back day.",
      fitnessGoal: "BACK_DAY",
    },
    {
      name: "Black Bean and Corn Salad",
      description: "Black bean and corn salad with avocado. Provides plant-based protein for back training.",
      fitnessGoal: "BACK_DAY",
    },
    {
      name: "Turkey and Avocado Wrap",
      description: "Sliced turkey and avocado wrap with a side of mixed greens. A quick and nutritious option for back day.",
      fitnessGoal: "BACK_DAY",
    },
    {
      name: "Tofu and Vegetable Stir-Fry",
      description: "Tofu and vegetable stir-fry with brown rice. Plant-based protein and fiber for back strength.",
      fitnessGoal: "BACK_DAY",
    },
  
    // SHOULDERS_DAY
    {
      name: "Grilled Chicken and Quinoa Salad",
      description: "Grilled chicken breast on a bed of quinoa salad. Protein and complex carbs for shoulder workouts.",
      fitnessGoal: "SHOULDERS_DAY",
    },
    {
      name: "Tuna and White Bean Salad",
      description: "Tuna and white bean salad with lemon vinaigrette. A light and refreshing choice for shoulder day.",
      fitnessGoal: "SHOULDERS_DAY",
    },
    {
      name: "Stir-Fried Tofu and Snow Peas",
      description: "Stir-fried tofu and snow peas with ginger sauce. Plant-based protein for shoulder strength.",
      fitnessGoal: "SHOULDERS_DAY",
    },
    {
      name: "Shrimp and Vegetable Skewers",
      description: "Grilled shrimp and vegetable skewers. A delicious and protein-rich option for shoulder workouts.",
      fitnessGoal: "SHOULDERS_DAY",
    },
    {
      name: "Chicken and Vegetable Stir-Fry",
      description: "Chicken and vegetable stir-fry with a teriyaki glaze. Balanced nutrition for shoulder day.",
      fitnessGoal: "SHOULDERS_DAY",
    },
  
    // CHEST_DAY
    {
      name: "Baked Chicken Breast",
      description: "Baked chicken breast seasoned with herbs and spices. A lean protein source for chest workouts.",
      fitnessGoal: "CHEST_DAY",
    },
    {
      name: "Quinoa Salad with Avocado",
      description: "Quinoa salad with diced avocado, tomatoes, and a lime dressing. Nutrient-rich fuel for chest day.",
      fitnessGoal: "CHEST_DAY",
    },
    {
      name: "Lean Beef and Green Beans",
      description: "Lean beef strips sautéed with green beans. Protein and iron to support chest strength.",
      fitnessGoal: "CHEST_DAY",
    },
    {
      name: "Cottage Cheese and Pineapple",
      description: "Cottage cheese topped with fresh pineapple chunks. High-protein, low-fat option for chest workouts.",
      fitnessGoal: "CHEST_DAY",
    },
    {
      name: "Egg White Omelette",
      description: "Egg white omelette with spinach and feta. Low in fat and high in protein for chest day.",
      fitnessGoal: "CHEST_DAY",
    },
  
    // ARMS_DAY
    {
      name: "Tuna and Spinach Wrap",
      description: "Tuna salad and fresh spinach wrapped in a whole-grain tortilla. A balanced meal for arm day.",
      fitnessGoal: "ARMS_DAY",
    },
    {
      name: "Baked Sweet Potato Fries",
      description: "Baked sweet potato fries with a side of Greek yogurt dip. A tasty and nutritious choice for arm workouts.",
      fitnessGoal: "ARMS_DAY",
    },
    {
      name: "Chickpea and Tomato Salad",
      description: "Chickpea and tomato salad with herbs and olive oil. Plant-based protein for arm strength.",
      fitnessGoal: "ARMS_DAY",
    },
    {
      name: "Roasted Turkey and Cranberry Sandwich",
      description: "Roasted turkey, cranberry sauce, and lettuce on whole-grain bread. A classic choice for arm day fuel.",
      fitnessGoal: "ARMS_DAY",
    },
    {
      name: "Peanut Butter and Banana Smoothie",
      description: "Peanut butter, banana, and Greek yogurt smoothie. Provides protein and energy for arm workouts.",
      fitnessGoal: "ARMS_DAY",
    },
  
    // CARDIO
    {
      name: "Spinach and Strawberry Salad",
      description: "Spinach and strawberry salad with balsamic vinaigrette. A light and refreshing option for cardio training.",
      fitnessGoal: "CARDIO",
    },
    {
      name: "Brown Rice and Black Bean Bowl",
      description: "Brown rice and black bean bowl with salsa. Balanced carbs and protein for cardio workouts.",
      fitnessGoal: "CARDIO",
    },
    {
      name: "Oatmeal with Berries",
      description: "Oatmeal topped with mixed berries and a drizzle of honey. Complex carbs for sustained energy during cardio.",
      fitnessGoal: "CARDIO",
    },
    {
      name: "Grilled Veggie Wrap",
      description: "Grilled vegetable wrap with hummus in a whole-grain tortilla. A light and nutritious choice for cardio day.",
      fitnessGoal: "CARDIO",
    },
    {
      name: "Greek Yogurt Parfait",
      description: "Greek yogurt parfait with granola and fresh fruit. Protein and carbs for recovery after cardio.",
      fitnessGoal: "CARDIO",
    },
  
    // STRENGTH_TRAINING
    {
      name: "Beef and Broccoli Stir-Fry",
      description: "Beef and broccoli stir-fry with brown rice. A protein-packed option for strength training.",
      fitnessGoal: "STRENGTH_TRAINING",
      image: 'beefbrocli.jpg'
    },
    {
      name: "Salmon and Quinoa Salad",
      image:'salmonandquinoa.jpg',
      description: "Salmon and quinoa salad with lemon dill dressing. Omega-3s and protein for strength workouts.",
      fitnessGoal: "STRENGTH_TRAINING",
    },
    {
      name: "Grilled Chicken and Vegetables",
      image: 'grilledchickenveggie.jpg',
      description: "Grilled chicken breast with a side of mixed grilled vegetables. Lean protein for strength gains.",
      fitnessGoal: "STRENGTH_TRAINING",
    },
    {
      name: "Tofu and Edamame Stir-Fry",
      image: 'tofuedumame.webp',
      description: "Tofu and edamame stir-fry with brown rice. Plant-based protein for strength and recovery.",
      fitnessGoal: "STRENGTH_TRAINING",
    },
    {
      name: "Pasta with Lean Turkey Meatballs",
      image: 'turkeymeatball.jpg',
      description: "Whole-grain pasta with lean turkey meatballs and marinara sauce. A balanced meal for strength training.",
      fitnessGoal: "STRENGTH_TRAINING",
    },
  
    // FLEXIBILITY
    {
      name: "Avocado and Cucumber Salad",
      description: "Avocado and cucumber salad with lime dressing. A light and hydrating choice for flexibility training.",
      fitnessGoal: "FLEXIBILITY",
    },
    {
      name: "Cottage Cheese and Pineapple",
      description: "Cottage cheese topped with fresh pineapple chunks. High-protein, low-fat option for flexibility workouts.",
      fitnessGoal: "FLEXIBILITY",
    },
    {
      name: "Mango and Yogurt Smoothie",
      description: "Mango and Greek yogurt smoothie. Provides protein and vitamins for flexibility training.",
      fitnessGoal: "FLEXIBILITY",
    },
    {
      name: "Caprese Salad",
      description: "Caprese salad with tomatoes, fresh mozzarella, and basil. A simple and light meal for flexibility day.",
      fitnessGoal: "FLEXIBILITY",
    },
    {
      name: "Quinoa and Chickpea Salad",
      description: "Quinoa and chickpea salad with lemon tahini dressing. Plant-based protein for flexibility and balance.",
      fitnessGoal: "FLEXIBILITY",
    },
  
    // BALANCE_TRAINING
    {
      name: "Peanut Butter and Banana Toast",
      description: "Whole-grain toast with peanut butter and sliced banana. Provides energy and protein for balance training.",
      fitnessGoal: "BALANCE_TRAINING",
    },
    {
      name: "Mixed Nuts and Dried Fruits",
      description: "A mix of nuts and dried fruits. Balanced snacks to fuel balance and stability exercises.",
      fitnessGoal: "BALANCE_TRAINING",
    },
    {
      name: "Greek Yogurt with Honey",
      description: "Greek yogurt drizzled with honey and a sprinkle of nuts. Protein and natural sweetness for balance workouts.",
      fitnessGoal: "BALANCE_TRAINING",
    },
    {
      name: "Hummus and Veggie Platter",
      description: "Hummus with a variety of fresh vegetable sticks. A nutritious snack for balance and core training.",
      fitnessGoal: "BALANCE_TRAINING",
    },
    {
      name: "Protein Smoothie Bowl",
      description: "Protein smoothie bowl topped with granola and fresh fruit. Provides protein and energy for balance exercises.",
      fitnessGoal: "BALANCE_TRAINING",
    },
  ];
  
  
  export  {muscleBuildingWorkouts, GymBuildingWorkouts, LongListOutdoorParkWorkouts, RandomWorkouts, allWorkouts}