// Barrel export for all mock datasets. Each module adds its own file here
// (e.g. mockFoods.js, mockWorkouts.js, mockUsers.js) and re-exports it below
// so pages can do `import { mockFoods } from '@data'` instead of deep paths.
//
// Populated incrementally:
//   Module 6 (Nutrition)  -> mockFoods, mockMeals
//   Module 8 (Workout)    -> mockWorkouts, mockExercises
//   Module 9 (AI Coach)   -> mockConversations
//   Module 10 (Progress)  -> mockProgressHistory
//   Module 11 (Habits)    -> mockHabits

export const DATA_MODULE_STATUS = 'scaffold-only'
