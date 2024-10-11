import { createBrowserRouter, RouteObject } from "react-router-dom";

import App from "./App";
import AddPeople from "./pages/add-people/AddPeople";
import NotFoundRedirect from "./components/not-found-redirect/NotFoundRedirect";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import Home from "./pages/home-page/Home";
import PeopleTable from "./pages/people-table/PeopleTable";
import EditPeople from "./pages/edit-people/EditPeople";
import PeopleTree from "./pages/people-tree/PeopleTree";
import AccountDetails from "./pages/account-details/AccountDetails";
import LoginForm from "./pages/login-form/LoginForm";
import RegisterForm from "./pages/register-form/RegisterForm";

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
            path: "workflow",
            element: <PeopleTree />,
          },
          {
            path: "add-user",
            element: <AddPeople />,
          },
          {
            path: "account-details",
            element: <AccountDetails />,
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
