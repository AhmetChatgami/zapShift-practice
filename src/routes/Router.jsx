import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/Auth/SignIn/SignIn";
import Register from "../pages/Auth/Register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: 'beRider',
          element: <PrivateRoute><Rider/> </PrivateRoute>
        },
        {
            path: 'coverage',
            Component: Coverage,
            loader: ()=> fetch('/serviceCenter.json').then(res=>res.json())
        }
    ]
  },
  {
    path:'/',
    Component: AuthLayout,
    children:[
      {
        path: 'sign-in',
        Component: SignIn,
      },
      {
        path: 'register',
        Component: Register,
      }
    ]
  }
]);