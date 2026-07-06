export const dashboardData = {
  user: {
    name: "Manik",
    streak: 12,
  },

  stats: [
    {
      id: 1,
      title: "Calories",
      value: 2350,
      target: 2800,
      unit: "kcal",
      progress: 84,
    },
    {
      id: 2,
      title: "Protein",
      value: 126,
      target: 150,
      unit: "g",
      progress: 84,
    },
    {
      id: 3,
      title: "Water",
      value: 2.5,
      target: 3,
      unit: "L",
      progress: 83,
    },
    {
      id: 4,
      title: "Workout",
      value: "Completed",
      target: null,
      unit: "",
      progress: 100,
    },
  ],

  workout: {
    title: "Push Day",
    duration: "75 min",
    exercises: 8,
    completed: true,
  },

  water: {
  consumed: 2.5,
  goal: 3,
  unit: "L",
},

 meals: [
  {
    id: 1,
    type: "Breakfast",
    icon: "🍳",
    name: "Oats & Banana",
    calories: 520,
    protein: 32,
  },
  {
    id: 2,
    type: "Lunch",
    icon: "🍗",
    name: "Chicken Rice Bowl",
    calories: 650,
    protein: 48,
  },
  {
    id: 3,
    type: "Snack",
    icon: "🥛",
    name: "Greek Yogurt",
    calories: 180,
    protein: 20,
  },
],
  achievements: [
  {
    id: 1,
    icon: "🔥",
    title: "15 Day Streak",
    description: "Logged workouts for 15 consecutive days",
    unlocked: true,
  },
  {
    id: 2,
    icon: "🥇",
    title: "Protein Master",
    description: "Reached protein goal 20 times",
    unlocked: true,
  },
  {
    id: 3,
    icon: "⚡",
    title: "Iron Warrior",
    description: "Completed 100 workouts",
    unlocked: false,
  },
],

 aiInsight: {
  title: "Protein Intake",

  message:
    "You're only 24g away from today's protein goal.",

  recommendation:
    "120g grilled chicken with rice",

  mealTime: "Within the next 2 hours",

  confidence: 96,
},

habits: {
  streak: 12,

  weekly: [1, 1, 1, 0, 1, 1, 0],

  items: [
    {
      id: 1,
      name: "Drink Water",
      completed: true,
    },
    {
      id: 2,
      name: "Workout",
      completed: true,
    },
    {
      id: 3,
      name: "Read 20 mins",
      completed: true,
    },
    {
      id: 4,
      name: "Stretching",
      completed: false,
    },
  ],
},

  weeklyProgress: [
  { day: "Mon", calories: 2200 },
  { day: "Tue", calories: 2450 },
  { day: "Wed", calories: 2600 },
  { day: "Thu", calories: 2350 },
  { day: "Fri", calories: 2500 },
  { day: "Sat", calories: 2750 },
  { day: "Sun", calories: 2400 },
],
};