import { AuthLogin, AuthSignup, Dashboard, Classfitness, Exercise, Mybooking } from "../pages";

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
  },
  {
    path: '/classfitness',
    element: <Classfitness />
  },
  {
    path: '/exercise',
    element: <Exercise />
  },
  {
    path: '/mybooking',
    element: <Mybooking />
  }

];