import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home.jsx";
import Shop from "../shop/Shop.jsx";
import About from "../components/About.component.jsx";
import Blog from "../components/Blog.component.jsx";
import SingleBook from "../shop/SingleBook.jsx";
import DashboardLayout from "../dachboard/DashboardLayout.dashboard.jsx";
import Dashbord from "../dachboard/Dashbord.dashboard.jsx";
import UploadBook from "../dachboard/UploadBook.dashborad.jsx";
import ManageBooks from "../dachboard/ManageBooks.dashboard.jsx";
import EditBooks from "../dachboard/EditBooks.dashboard.jsx";
import SignUp from "../components/SignUp.components.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import LogOut from "../components/LogOut.component.jsx";
import Profile from "../dachboard/Profile.dashboard.jsx";
import LogIn from "../components/Login.component.jsx";
import ForgotPassword from "../components/ForgotPassword.component.jsx";
import LogInForm from "../components/LogInForm.component.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/Blog", element: <Blog /> },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashbord />,
      },
      {
        path: "/admin/dashboard/upload-book",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage-books",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
      },
      {
        path: "/admin/dashboard/user-profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
    children: [
      {
        path: "/login",
        element: <LogInForm />,
      },
      {
        path: "/login/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/logout",
    element: <LogOut />,
  },
]);
