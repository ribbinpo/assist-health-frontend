import { AuthLogin, AuthSignup, Dashboard, Classfitness, Exercise, Mybooking, Trainer, Mytrainer, Account, Trainerschdule, BackofficeAdmin, BackofficeUser, Adminclass, Adduser, Viewclass, MyModal} from "../pages";

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
    path: '/adminclass',
    element: <Adminclass />
  },
  {
    path: '/adduser',
    element: <Adduser />
  },
  {
    path: '/viewclass',
    element: <Viewclass />
  },
  {
    path: 'c',
    element: <MyModal />
  }


];