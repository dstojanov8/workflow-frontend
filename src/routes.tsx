import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from './App';
import Home from './home-page/Home';
import PeopleTable from "./people-table/PeopleTable";
import LoginForm from "./login-form/LoginForm";
import RegisterForm from "./register-form/RegisterForm";
import AddPeople from "./add-people/AddPeople";

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
      {
        path: 'add-user',
        element: <AddPeople />
      },
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