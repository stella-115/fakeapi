import { createBrowserRouter } from "react-router-dom";
import SigninLayout from "../layout/SigninLayout";
import Signin from "../pages/signin/Signin";
import DashboardLayout from "../layout/DashboardLayout";
import HomeComp from "../pages/home/HomeComp";

export const element = createBrowserRouter([
    {
        path: "/",
        element: <SigninLayout/>,
        children:[{
            index: true,
            element:<Signin/>
        }]
    },
     {
        path: "/home",
        element: <DashboardLayout/>,
        children:[{
            index: true,
            element:<HomeComp/>
        }]
    }
])