import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage/ErrorPage.jsx";
import Home from "@/pages/Home/Home.jsx";
import Root from "@/layout/Root.jsx";
import Login from "@/pages/Login/Login.jsx";
import Register from "@/pages/Register/Register.jsx";
import AvailableFood from "@/pages/AvailableFood/AvailableFood.jsx";
import AddFood from "@/pages/AddFood/AddFood.jsx";
import ManageFood from "@/pages/ManageFood/ManageFood.jsx";
import MyRequest from "@/pages/MyRequest/MyRequest.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/foods.json')
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/available',
                element: <AvailableFood/>
            },
            {
                path: '/add',
                element: <AddFood/>
            },
            {
                path: '/manage',
                element: <ManageFood/>
            },
            {
                path: '/request',
                element: <MyRequest/>
            }
        ]
    }
    ]);

export default router;