import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import PeopleTable from "./people-table/PeopleTable";
import LoginForm from "./login-form/LoginForm";
import RegisterForm from "./register-form/RegisterForm";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'my-users',
        element: <PeopleTable />,
      },
      // {
      //   path: 'add-users',
      //   element: <AddPeople />
      // }
      // {
      //   path: 'user/:id',
      //   element: <UserProfile />,
      //   Here you can also define loaders for data fetching
      //   loader: async ({ params }) => {
      //     const response = await fetch(`/api/users/${params.id}`);
      //     return response.json();
      //   },
      // },
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'register',
        element: <RegisterForm />
      }
    ],
  },
];

// Create the router
const router = createBrowserRouter(routes);

export default router;