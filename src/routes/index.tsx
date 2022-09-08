import { AuthLogin, Signup } from "../pages";

export const guestRoutes = [
  {
    path: '/auth/login',
    element: <AuthLogin />
  },
  {
    path: '/auth/signup',
    element: <Signup />
  }
];