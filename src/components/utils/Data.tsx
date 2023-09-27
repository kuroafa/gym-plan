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
      difficulty: 'Intermediate',
    },
    {
      exercise: "Stability Ball Pull Ins",
      description: "Stability ball pull-ins are an effective exercise for working the lower abdominal muscles. You use a stability ball to bring your knees toward your chest while maintaining a plank-like position.",
      image: 'stability.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Bosu Ball Crunch",
      description: "Bosu ball crunch is an exercise that involves using a Bosu ball to perform crunches, which primarily target the abdominal muscles. It adds an element of balance and stability training.",
      image: 'ballcrun.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Laying Flat Bench Raises",
      description: "Laying flat bench raises are an effective exercise for targeting the lower abdominal muscles. You lie on a flat bench and raise your legs, engaging your lower abs.",
      image: 'benchraises.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Laying Leg Raises",
      description: "Laying leg raises are a lower abdominal exercise where you lie on your back and lift your legs while keeping them straight. This exercise helps strengthen the lower abs.",
      image: 'layingleg.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Elbow Plank",
      description: "The elbow plank is a core-strengthening exercise similar to the standard plank but with your weight supported on your forearms. It targets the abs, back, and shoulders.",
      image: 'elbowplank.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Hollow Hold",
      description: "The hollow hold is an exercise that involves lying on your back and lifting your legs and upper body off the ground, creating a 'hollow' position. It engages the entire core.",
      image: 'hollowhold.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Ball Crunch",
      description: "Ball crunches involve using an exercise ball to support your lower back while performing crunches. This exercise targets the abdominal muscles and adds an element of instability.",
      image: 'ballcrunch.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Wipers",
      description: "Wipers are an advanced core exercise performed while hanging from a pull-up bar. You swing your legs from side to side, engaging the obliques and lower abs.",
      image: 'Wipers.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Advanced',
    },
    {
      exercise: "Laying Flat Leg Raises",
      description: "Laying flat leg raises are similar to laying leg raises but with your legs extended flat on the ground. This exercise targets the lower abdominal muscles.",
      image: 'layingflatlegraisies.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Otis Up",
      description: "Otis up is a core-strengthening exercise that involves lying on your back, lifting your legs, and reaching for your toes. It targets the upper and lower abdominal muscles.",
      image: 'otisup.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Landmines",
      description: "Landmines are a weightlifting exercise that targets the obliques and core muscles. You use a barbell and perform a twisting motion with controlled weight.",
      image: 'landmin.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Intermediate',
    },
    {
      exercise: "Hanging Leg Raises",
      description: "Hanging leg raises are an advanced abdominal exercise performed while hanging from a pull-up bar. You raise your legs to work the lower abdominal muscles.",
      image: 'hanginglegraise.png',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      difficulty: 'Advanced',
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
      description: 'Push-ups are a great bodyweight exercise for your chest, shoulders, and triceps. Start in a plank position with your hands shoulder-width apart, lower your chest to the ground, and push back up.',
      sets: 3,
      reps: 15,
      restTime: 30,
      image: 'pushup.png',
      atHome: true,
      fitnessGoal: fitnessGoals.CHEST_DAY,
      difficulty: 'Beginner',
    },
    {
      exercise: 'Bodyweight Squats',
      description: 'Bodyweight squats are effective for targeting your quadriceps, hamstrings, and glutes. Stand with your feet shoulder-width apart, lower your body by bending your knees, and then stand back up.',
      sets: 3,
      reps: 15,
      restTime: 30,
      image:'bodyweightsquat.png' ,
      atHome: true,
      fitnessGoal: fitnessGoals.LEG_DAY,
      difficulty: 'Beginner',
    },
    {
      exercise: 'Plank',
      description: 'The plank is an excellent core-strengthening exercise. Hold a push-up position with your elbows on the ground and your body in a straight line for the specified time duration.',
      sets: 3,
      reps: 'Hold for 30 seconds',
      restTime: 30,
      image: 'Plank.png',
      atHome: true,
      fitnessGoal: fitnessGoals.STRENGTH_TRAINING,
      difficulty: 'Beginner',
    },
    {
      exercise: 'Lunges',
      description: 'Lunges can be done without weights for leg development. Step forward with one leg, bend both knees, and lower your body until your rear knee is just above the ground. Alternate legs.',
      sets: 3,
      reps: '12 each leg',
      restTime: 30,
      image: 'lunges.png',
      atHome: true,
      fitnessGoal: fitnessGoals.LEG_DAY,
      difficulty: 'Beginner',
    },
    {
      exercise: 'Chair Dips',
      description: 'Chair dips are a variation of dips that can be done using a sturdy chair. Position your hands on the edge of the chair, lower your body, and then push yourself back up.',
      sets: 3,
      reps: 12,
      restTime: 30,
      image:'chairdips.png',
      atHome: true,
      fitnessGoal: fitnessGoals.ARMS_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Bodyweight Rows',
      description: 'Bodyweight rows are a great back and bicep exercise. Use a sturdy horizontal bar, like a pull-up bar or a TRX system, and pull your chest towards the bar.',
      sets: 3,
      reps: 12,
      restTime: 30,
      atHome: false,
      image: 'bodyweightrows.png',
      fitnessGoal: fitnessGoals.BACK_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Calf Raises',
      description: 'Calf raises can be done without weights. Stand with your feet hip-width apart, raise your heels as high as possible, and then lower them back down.',
      sets: 3,
      reps: 20,
      restTime: 30,
      atHome: true,
      image: 'calraises.png',
      fitnessGoal: fitnessGoals.LEG_DAY,
      difficulty: 'Beginner',
    },
    {
      exercise: 'Wall Sits',
      description: 'Wall sits are great for strengthening your quads. Lean against a wall with your knees at a 90-degree angle and hold the position for the specified time duration.',
      sets: 3,
      reps: 'Hold for 30 seconds',
      restTime: 30,
      atHome: true,
      image:'wallsit.png' ,
      fitnessGoal: fitnessGoals.LEG_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Bench Press',
      description: 'The bench press is a classic chest exercise. Lie on a flat bench, grip the barbell with hands slightly wider than shoulder-width, lower it to your chest, and then push it back up.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image:'bench.png' ,
      fitnessGoal: fitnessGoals.CHEST_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Leg Press',
      description: 'The leg press machine is excellent for working your lower body. Sit in the machine, press the weight upward with your feet, and then lower it back down.',
      sets: 4,
      reps: 10,
      restTime: 60,
      atHome: false,
      image: 'legpress.png',
      fitnessGoal: fitnessGoals.LEG_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Lat Pulldown',
      description: 'The lat pulldown machine targets your back and biceps. Sit at the machine, grip the bar, and pull it down to your chest, then slowly release it back up.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image: 'latpulldown.png',
      fitnessGoal: fitnessGoals.BACK_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Leg Curl',
      description: 'The leg curl machine is great for isolating your hamstrings. Lie on the machine, secure your legs, and curl the weight by bending your knees, then straighten them.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image:'legcurl.png' ,
      fitnessGoal: fitnessGoals.LEG_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Seated Row ',
      description: 'The seated row machine works your back and biceps. Sit at the machine, grip the handles, and pull them towards your torso, then extend your arms to return to the start.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image:'seatedrow.png' ,
      fitnessGoal: fitnessGoals.BACK_DAY,
      difficulty: 'Intermediate',
    },
   
    {
      exercise: 'Bicep Curls',
      description: 'Cable bicep curls are great for targeting your biceps. Stand in front of the cable machine, grip the handle, and curl the weight towards your chest, then lower it.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image: 'bicepcurl.png',
      fitnessGoal: fitnessGoals.ARMS_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Tricep Pushdown ',
      description: 'The tricep pushdown machine works your triceps. Stand at the cable machine, grip the bar, and push it down by extending your elbows, then return to the start.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image: 'tricebpushdown.png' ,
      fitnessGoal: fitnessGoals.ARMS_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Pull-Ups',
      description: 'Find a sturdy horizontal bar at the park for pull-ups. Hang from the bar with your palms facing away, then pull your chest towards the bar and lower yourself back down.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image: 'pullup.png',
      fitnessGoal: fitnessGoals.BACK_DAY,
      difficulty: 'Advanced',
    },
    {
      exercise: 'Lunges',
      description: 'Perform lunges to work your legs and improve balance. Step forward with one leg, bend both knees, and lower your body until your rear knee is just above the ground. Alternate legs.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image: 'lunges.png' ,
      fitnessGoal: fitnessGoals.LEG_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Bench Dips',
      description: 'Use a park bench for tricep dips. Position your hands on the edge of the bench, lower your body, and then push yourself back up.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image: 'benchdip.png',
      fitnessGoal: fitnessGoals.ARMS_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Bench Step-Ups',
      description: 'Use a park bench for step-ups. Step onto the bench with one leg, then bring the other leg up, and step back down. Repeat for the specified number of reps on each leg.',
      sets: 4,
      reps: '12 (each leg)',
      restTime: 60,
      atHome: false,
      image: 'stepups.png',
      fitnessGoal: fitnessGoals.LEG_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Bench Leg Raises',
      description: 'Hold onto a park bench and do leg raises. Hang from the bench and lift your legs up to a 90-degree angle, then lower them back down.',
      sets: 4,
      reps: '12 (each leg)',
      restTime: 60,
      atHome: false,
      image: 'benchlegraises.png',
      fitnessGoal: fitnessGoals.STRENGTH_TRAINING,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Bench Push-Ups',
      description: 'Use a park bench for incline push-ups. Place your hands on the bench and perform push-ups to work your chest, shoulders, and triceps.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image: 'benchpushup.png',
      fitnessGoal: fitnessGoals.CHEST_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Shoulder Press',
      description: 'The shoulder press machine targets your shoulders and triceps. Sit at the machine, grip the handles, and press the weight upward, then lower it back down.',
      sets: 4,
      reps: 12,
      restTime: 60,
      atHome: false,
      image: 'shoulder.png',
      fitnessGoal: fitnessGoals.SHOULDERS_DAY,
      difficulty: 'Intermediate',
    },
    {
      exercise: 'Resistance Band Stretches',
      description: 'Use resistance bands for assisted stretching. Anchor the band and use it to gently stretch various muscle groups, such as hamstrings, shoulders, and chest.',
      sets: 3,
      reps: '15-20 seconds (each stretch)',
      restTime: '30 seconds between sets',
      atHome: true,
      image: 'band.png',
      fitnessGoal: fitnessGoals.FLEXIBILITY,
      difficulty: 'Intermediate',
    },
    
    // BALANCE_TRAINING (Home Workouts)
    {
      exercise: 'Single-Leg Balance',
      description: 'Stand on one leg with your eyes closed for 30 seconds to improve proprioception and balance. Gradually increase the duration as you progress.',
      sets: 3,
      reps: '30 seconds (each leg)',
      restTime: '30 seconds between sets',
      atHome: true,
      image: 'single2.png',
      fitnessGoal: fitnessGoals.BALANCE_TRAINING,
      difficulty: 'Beginner',
    },
    {
      exercise: 'Foam Rolling Session',
      description: 'Use a foam roller to target muscle knots and improve flexibility. Roll over different muscle groups, applying gentle pressure to release tension. Spend 1-2 minutes on each muscle group.',
      sets: 1,
      reps:' 1 session (1-2 minutes per muscle group)',
      restTime: 'As needed',
      atHome: true,
      image: 'foam.png',
      fitnessGoal: fitnessGoals.FLEXIBILITY,
      difficulty: 'Beginner',
    },
    {
      exercise: 'Dynamic Yoga Flow',
      description: 'Engage in a dynamic yoga flow that combines yoga poses with fluid movements. Focus on transitions between poses to enhance flexibility and build strength. Follow along with a video or guide.',
      sets: 1,
      reps: '1 session (30-60 minutes)',
      restTime: 'As needed',
      atHome: true,
      image: '',
      fitnessGoal: fitnessGoals.FLEXIBILITY,
      difficulty: 'Intermediate',
    },
    ,
    {
      exercise: 'Pilates Mat Routine',
      description: 'Practice a Pilates mat routine that emphasizes flexibility and core strength. Exercises like the Hundred, Roll-Up, and Spine Stretch can be done at home.',
      sets: 3,
      reps: '12-15 (each exercise)',
      restTime: '30 seconds between sets',
      atHome: true,
      fitnessGoal: fitnessGoals.FLEXIBILITY,
      image: '',
      difficulty: 'Intermediate',
    },
    
];

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
      image:'sweetpotatochicken.jpg'
    },
    {
      name: "Quinoa and Black Bean Stuffed Peppers",
      description: "Bell peppers stuffed with quinoa, black beans, and vegetables. Provides energy for leg-focused training.",
      fitnessGoal: "LEG_DAY",
      image: 'beansquinoa.jpg'
    },
    {
      name: "Salmon with Asparagus",
      description: "Baked or grilled salmon with steamed asparagus. Omega-3s for joint health on leg day.",
      fitnessGoal: "LEG_DAY",
      image:'salmonass.jpg'
    },
    {
      name: "Chickpea and Spinach Curry",
      description: "A hearty chickpea and spinach curry with brown rice. Plant-based protein for leg strength.",
      fitnessGoal: "LEG_DAY",
      image:'chickpeasspinch.webp'
    },
   

    // BACK_DAY
    {
      name: "Grilled Salmon and Quinoa",
      description: "Grilled salmon fillet with quinoa. Protein and healthy fats to support back workouts.",
      fitnessGoal: "BACK_DAY",
      image:  'salmonquinoa.jpg'
    },
    {
      name: "Chicken and Broccoli Alfredo",
      description: "Chicken and broccoli alfredo pasta. A creamy and satisfying meal for back day.",
      fitnessGoal: "BACK_DAY",
      image: 'c&broccli.jpg'
    },
    {
      name: "Black Bean and Corn Salad",
      description: "Black bean and corn salad with avocado. Provides plant-based protein for back training.",
      fitnessGoal: "BACK_DAY",
      image: 'blackbeancorn.jpg'
    },
    {
      name: "Turkey and Avocado Wrap",
      description: "Sliced turkey and avocado wrap with a side of mixed greens. A quick and nutritious option for back day.",
      fitnessGoal: "BACK_DAY",
      image: 'tuukey.webp'
    },
    {
      name: "Tofu and Vegetable Stir-Fry",
      description: "Tofu and vegetable stir-fry with brown rice. Plant-based protein and fiber for back strength.",
      fitnessGoal: "BACK_DAY",
      image: 'tofu.jpg'
    },
  
    // SHOULDERS_DAY
    {
      name: "Grilled Chicken and Quinoa Salad",
      description: "Grilled chicken breast on a bed of quinoa salad. Protein and complex carbs for shoulder workouts.",
      fitnessGoal: "SHOULDERS_DAY",
      image: 'quimasalad.jpg'
    },
    {
      name: "Tuna and White Bean Salad",
      description: "Tuna and white bean salad with lemon vinaigrette. A light and refreshing choice for shoulder day.",
      fitnessGoal: "SHOULDERS_DAY",
      image: 'tunawhitebean.jpg'
    },
    {
      name: "Stir-Fried Tofu and Snow Peas",
      description: "Stir-fried tofu and snow peas with ginger sauce. Plant-based protein for shoulder strength.",
      fitnessGoal: "SHOULDERS_DAY",
      image: 'snowpeas.jpg'
    },
    {
      name: "Shrimp and Vegetable Skewers",
      description: "Grilled shrimp and vegetable skewers. A delicious and protein-rich option for shoulder workouts.",
      fitnessGoal: "SHOULDERS_DAY",
      image: 'shrimpveg.jpg'
    },
    {
      name: "Chicken and Vegetable Stir-Fry",
      description: "Chicken and vegetable stir-fry with a teriyaki glaze. Balanced nutrition for shoulder day.",
      fitnessGoal: "SHOULDERS_DAY",
      image:'chickenveg.jpg'
    },
  
    // CHEST_DAY
    {
      name: "Baked Chicken Breast",
      description: "Baked chicken breast seasoned with herbs and spices. A lean protein source for chest workouts.",
      fitnessGoal: "CHEST_DAY",
      image:'bakedchick.jpg'
    },
    {
      name: "Quinoa Salad with Avocado",
      description: "Quinoa salad with diced avocado, tomatoes, and a lime dressing. Nutrient-rich fuel for chest day.",
      fitnessGoal: "CHEST_DAY",
      image:'avosalad.jpg'
    },
    {
      name: "Lean Beef and Green Beans",
      description: "Lean beef strips sautéed with green beans. Protein and iron to support chest strength.",
      fitnessGoal: "CHEST_DAY",
      image:'leanbeef.jpg'
    },
    {
      name: "Egg White Omelette",
      description: "Egg white omelette with spinach and feta. Low in fat and high in protein for chest day.",
      fitnessGoal: "CHEST_DAY",
      image:'eggom.jpg'
    },
  
    // ARMS_DAY
    {
      name: "Tuna and Spinach Wrap",
      description: "Tuna salad and fresh spinach wrapped in a whole-grain tortilla. A balanced meal for arm day.",
      fitnessGoal: "ARMS_DAY",
      image:'tunawrap.jpg'
    },
    {
      name: "Baked Sweet Potato Fries",
      description: "Baked sweet potato fries with a side of Greek yogurt dip. A tasty and nutritious choice for arm workouts.",
      fitnessGoal: "ARMS_DAY",
      image:'sweetfries.jpg'
    },
    {
      name: "Chickpea and Tomato Salad",
      description: "Chickpea and tomato salad with herbs and olive oil. Plant-based protein for arm strength.",
      fitnessGoal: "ARMS_DAY",
      image:'tomatosal.jpg'
    },
    {
      name: "Roasted Turkey and Cranberry Sandwich",
      description: "Roasted turkey, cranberry sauce, and lettuce on whole-grain bread. A classic choice for arm day fuel.",
      fitnessGoal: "ARMS_DAY",
      image:'turkeyCran.jpg'
    },
    {
      name: "Peanut Butter and Banana Smoothie",
      description: "Peanut butter, banana, and Greek yogurt smoothie. Provides protein and energy for arm workouts.",
      fitnessGoal: "ARMS_DAY",
      image:'peanutbanana.jpg'
    },
  
    // CARDIO
    {
      name: "Spinach and Strawberry Salad",
      description: "Spinach and strawberry salad with balsamic vinaigrette. A light and refreshing option for cardio training.",
      fitnessGoal: "CARDIO",
      image:'strawspinsalad.jpg'
    },
    {
      name: "Brown Rice and Black Bean Bowl",
      description: "Brown rice and black bean bowl with salsa. Balanced carbs and protein for cardio workouts.",
      fitnessGoal: "CARDIO",
      image:'blackbeanrice.webp'
    },
    {
      name: "Oatmeal with Berries",
      description: "Oatmeal topped with mixed berries and a drizzle of honey. Complex carbs for sustained energy during cardio.",
      fitnessGoal: "CARDIO",
      image:'berriesoat.jpg'
    },
    {
      name: "Grilled Veggie Wrap",
      description: "Grilled vegetable wrap with hummus in a whole-grain tortilla. A light and nutritious choice for cardio day.",
      fitnessGoal: "CARDIO",
      image:'veggie.jpg'
    },
    {
      name: "Greek Yogurt Parfait",
      description: "Greek yogurt parfait with granola and fresh fruit. Protein and carbs for recovery after cardio.",
      fitnessGoal: "CARDIO",
      image:'parfait.jpg'
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
      image: 'avocadoCucumber.jpg'
    },
    {
      name: "Cottage Cheese and Pineapple",
      description: "Cottage cheese topped with fresh pineapple chunks. High-protein, low-fat option for flexibility workouts.",
      fitnessGoal: "FLEXIBILITY",
      image: 'cottage.jpg'
    },
    {
      name: "Mango and Yogurt Smoothie",
      description: "Mango and Greek yogurt smoothie. Provides protein and vitamins for flexibility training.",
      fitnessGoal: "FLEXIBILITY",
      image: 'mangoyo.jpg'
    },
    {
      name: "Caprese Salad",
      description: "Caprese salad with tomatoes, fresh mozzarella, and basil. A simple and light meal for flexibility day.",
      fitnessGoal: "FLEXIBILITY",
      image: 'caprese.webp'
    },
    {
      name: "Quinoa and Chickpea Salad",
      description: "Quinoa and chickpea salad with lemon tahini dressing. Plant-based protein for flexibility and balance.",
      fitnessGoal: "FLEXIBILITY",
      image: 'chicquinoa.jpg'
    },
  
    // BALANCE_TRAINING
    {
      name: "Peanut Butter and Banana Toast",
      description: "Whole-grain toast with peanut butter and sliced banana. Provides energy and protein for balance training.",
      fitnessGoal: "BALANCE_TRAINING",
      image:'peanuttoast.jpg'
    },
    {
      name: "Mixed Nuts and Dried Fruits",
      description: "A mix of nuts and dried fruits. Balanced snacks to fuel balance and stability exercises.",
      fitnessGoal: "BALANCE_TRAINING",
      image:'mixnuts.jpg'
    },
    {
      name: "Greek Yogurt with Honey",
      description: "Greek yogurt drizzled with honey and a sprinkle of nuts. Protein and natural sweetness for balance workouts.",
      fitnessGoal: "BALANCE_TRAINING",
      image:'greekhoney.jpg'
    },
    {
      name: "Hummus and Veggie Platter",
      description: "Hummus with a variety of fresh vegetable sticks. A nutritious snack for balance and core training.",
      fitnessGoal: "BALANCE_TRAINING",
      image:'hummusveg.jpg'
    },
    {
      name: "Protein Smoothie Bowl",
      description: "Protein smoothie bowl topped with granola and fresh fruit. Provides protein and energy for balance exercises.",
      fitnessGoal: "BALANCE_TRAINING",
      image:'protienbowl.webp'
    },
  ];
  
  
  export  {muscleBuildingWorkouts, GymBuildingWorkouts, LongListOutdoorParkWorkouts, RandomWorkouts, allWorkouts}