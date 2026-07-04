// Central route map — every navbar link, redirect, and <Route path> references
// these constants so a URL never has to be typed twice across the app.

export const ROUTES = {
  // Public / marketing
  HOME: '/',

  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  VERIFY_OTP: '/auth/verify-otp',
  RESET_PASSWORD: '/auth/reset-password',

  // Core app (protected)
  DASHBOARD: '/app/dashboard',

  NUTRITION: '/app/nutrition',
  NUTRITION_SEARCH: '/app/nutrition/search',
  NUTRITION_MEAL_LOGGER: '/app/nutrition/log',
  NUTRITION_FOOD_DETAILS: '/app/nutrition/food/:foodId',

  SCANNER: '/app/scanner',

  WORKOUT: '/app/workout',
  WORKOUT_PLANS: '/app/workout/plans',
  WORKOUT_LIBRARY: '/app/workout/library',
  WORKOUT_TODAY: '/app/workout/today',
  WORKOUT_HISTORY: '/app/workout/history',
  WORKOUT_EXERCISE_DETAILS: '/app/workout/exercise/:exerciseId',

  AI_COACH: '/app/coach',

  PROGRESS: '/app/progress',
  PROGRESS_WEIGHT: '/app/progress/weight',
  PROGRESS_STRENGTH: '/app/progress/strength',
  PROGRESS_MEASUREMENTS: '/app/progress/measurements',
  PROGRESS_PHOTOS: '/app/progress/photos',

  HABITS: '/app/habits',

  PROFILE: '/app/profile',
  SETTINGS: '/app/settings',

  NOTIFICATIONS: '/app/notifications',

  COMMUNITY: '/app/community', // Coming Soon

  NOT_FOUND: '*',
}

export const NAV_LINKS = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD },
  { label: 'Nutrition', path: ROUTES.NUTRITION },
  { label: 'Workout', path: ROUTES.WORKOUT },
  { label: 'AI Coach', path: ROUTES.AI_COACH },
  { label: 'Progress', path: ROUTES.PROGRESS },
  { label: 'Community', path: ROUTES.COMMUNITY, comingSoon: true },
]
