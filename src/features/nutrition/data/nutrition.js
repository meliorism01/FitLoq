export const nutritionData = {
  score: 91,

  calories: {
    consumed: 1820,
    goal: 2400,
  },

  insight:
    "You're only 24g away from today's protein goal. Add grilled chicken after your workout.",

  date: "Wednesday, July 9",

  aiStatus: "AI analyzed today's meals",

  macros: [
  {
    id: 1,
    name: "Protein",
    icon: "🥩",
    consumed: 126,
    goal: 150,
    color: "emerald",
  },
  {
    id: 2,
    name: "Carbs",
    icon: "🍚",
    consumed: 220,
    goal: 260,
    color: "orange",
  },
  {
    id: 3,
    name: "Fat",
    icon: "🥑",
    consumed: 58,
    goal: 70,
    color: "yellow",
  },
  {
    id: 4,
    name: "Fiber",
    icon: "🌾",
    consumed: 24,
    goal: 35,
    color: "purple",
  },
],
meals: [
  {
    id: 1,
    title: "Breakfast",
    icon: "🍳",
    time: "08:15 AM",
    calories: 420,
    protein: 32,
    foods: ["Omelette", "Brown Bread", "Milk"],
    completed: true,
  },
  {
    id: 2,
    title: "Lunch",
    icon: "🍗",
    time: "01:20 PM",
    calories: 780,
    protein: 48,
    foods: ["Chicken Breast", "Rice", "Salad"],
    completed: true,
  },
  {
    id: 3,
    title: "Snack",
    icon: "🥜",
    time: "05:00 PM",
    calories: 220,
    protein: 18,
    foods: ["Greek Yogurt", "Almonds"],
    completed: true,
  },
  {
    id: 4,
    title: "Dinner",
    icon: "🌙",
    time: "--",
    calories: 0,
    protein: 0,
    foods: [],
    completed: false,
  },
],
forecast: {
  protein: 96,
  carbs: 108,
  fat: 83,

  recommendation:
    "Choose grilled chicken and vegetables for dinner to reach your protein goal while avoiding excess carbs.",
},
coach: {
  score: 94,

  greeting: "Good work today, Manik! 💪",

  positives: [
    "Protein intake is almost complete.",
    "Meal timing has been consistent.",
  ],

  warnings: [
    "Carbs are slightly above today's target.",
  ],

  recommendation:
    "For dinner, choose grilled chicken with vegetables instead of rice.",

  button: "Ask AI Anything",
},
consistency: {
  currentStreak: 14,
  bestStreak: 31,

  month: "July",

  calendar: [
    { day: 1, score: 98 },
    { day: 2, score: 94 },
    { day: 3, score: 81 },
    { day: 4, score: 62 },
    { day: 5, score: 0 },

    { day: 6, score: 91 },
    { day: 7, score: 95 },
    { day: 8, score: 88 },
    { day: 9, score: 100 },
    { day: 10, score: 97 },
    { day: 11, score: 84 },
    { day: 12, score: 71 },

    { day: 13, score: 95 },
    { day: 14, score: 100 },
    { day: 15, score: 89 },
    { day: 16, score: 96 },
    { day: 17, score: 54 },
    { day: 18, score: 98 },
    { day: 19, score: 93 },

    { day: 20, score: 90 },
    { day: 21, score: 0 },
    { day: 22, score: null },
    { day: 23, score: null },
    { day: 24, score: null },
    { day: 25, score: null },
    { day: 26, score: null },
    { day: 27, score: null },
    { day: 28, score: null },
    { day: 29, score: null },
    { day: 30, score: null },
    { day: 31, score: null },
  ],
},
};