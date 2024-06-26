import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../home/Home';
import Shop from './../shop/Shop';
import About from './../components/About.component';
import Blog from './../components/Blog.component';
import SingleBook from './../shop/SingleBook';
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import DashboardLayout from './../dachboard/DashboardLayout.dashboard';
import Dashbord from './../dachboard/Dashbord.dashboard';
import UploadBook from './../dachboard/UploadBook.dashborad';
import ManageBooks from './../dachboard/ManageBooks.dashboard';
import EditBooks from './../dachboard/EditBooks.dashboard';
import Profile from './../dachboard/Profile.dashboard';
import SignUp from './../components/SignUp.components';
import LogIn from './../components/LogIn.component';
import LogInForm from './../components/LogInForm.component';
import ForgotPassword from './../components/ForgotPassword.component';
import LogOut from './../components/LogOut.component';


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
