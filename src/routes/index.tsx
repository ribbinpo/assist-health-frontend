import { AuthLogin, AuthSignup, Dashboard, Classfitness, Exercise, Mybooking, Trainer, Mytrainer, Account, Trainerschdule, BackofficeAdmin, BackofficeUser, Edituser, Adminclass, Adduser, Editclass, Viewclass, Deluser, MyModal } from "../pages";

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
  },
  {
    path: '/trainer',
    element: <Trainer />
  },
  {
    path: '/mytrainer',
    element: <Mytrainer />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/trainerschdule',
    element: <Trainerschdule />
  },
  {
    path: '/admin',
    element: <BackofficeAdmin />
  },
  {
    path: '/user',
    element: <BackofficeUser />
  },
  {
    path: '/edituser',
    element: <Edituser />
  },
  {
    path: '/adminclass',
    element: <Adminclass />
  },
  {
    path: '/adduser',
    element: <Adduser />
  },
  {
    path: '/editclass',
    element: <Editclass />
  },
  {
    path: '/viewclass',
    element: <Viewclass />
  },
  {
    path: '/deluser',
    element: <Deluser />
  },
  {
    path: 'c',
    element: <MyModal />
  }


];