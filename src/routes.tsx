import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import Home from "./components/home-page/Home";
import PeopleTable from "./components/people-table/PeopleTable";
import LoginForm from "./components/login-form/LoginForm";
import AddPeople from "./components/add-people/AddPeople";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import NotFoundRedirect from "./components/not-found-redirect/NotFoundRedirect";
import RegisterForm from "./components/register-form/RegisterForm";
import EditPeople from "./components/edit-people/EditPeople";
import PeopleTree from "./components/people-tree/PeopleTree";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "my-users",
            element: <PeopleTable />,
          },
          {
            path: "my-users/:id",
            element: <EditPeople />, // New User Details route
          },
          {
            path: "tree",
            element: <PeopleTree />,
          },
          {
            path: "add-user",
            element: <AddPeople />,
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
        ],
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "*",
        element: <NotFoundRedirect />,
      },
    ],
  },
];

// Create the router
const router = createBrowserRouter(routes);

export default router;
