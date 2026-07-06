import {
  LayoutDashboard,
  UtensilsCrossed,
  Dumbbell,
  TrendingUp,
  Bot,
  Bell,
  User,
  Settings,
} from "lucide-react";

import { ROUTES } from "./routes";

export const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: ROUTES.DASHBOARD,
  },
  {
    label: "Nutrition",
    icon: UtensilsCrossed,
    path: ROUTES.NUTRITION,
  },
  {
    label: "Workout",
    icon: Dumbbell,
    path: ROUTES.WORKOUT,
  },
  {
    label: "Progress",
    icon: TrendingUp,
    path: ROUTES.PROGRESS,
  },
  {
    label: "AI Coach",
    icon: Bot,
    path: ROUTES.AI_COACH,
  },
];

export const BOTTOM_SIDEBAR_ITEMS = [
  {
    label: "Notifications",
    icon: Bell,
    path: ROUTES.NOTIFICATIONS,
  },
  {
    label: "Profile",
    icon: User,
    path: ROUTES.PROFILE,
  },
  {
    label: "Settings",
    icon: Settings,
    path: ROUTES.SETTINGS,
  },
];