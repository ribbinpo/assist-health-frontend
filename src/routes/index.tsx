import { AuthLogin, AuthSignup, Dashboard } from "../pages";

export const guestRoutes = [
  {
    path: '/auth/login',
    element: <AuthLogin />
  },
  {
    path: '/auth/signup',
    element: <AuthSignup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
];