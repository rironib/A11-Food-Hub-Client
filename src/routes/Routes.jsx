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
import SingleFood from "@/pages/SingleFood/SingleFood.jsx";
import PrivateRoute from "@/routes/PrivateRoute.jsx";
import UpdateFood from "@/pages/UpdateFood/UpdateFood.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('https://food-hub-api-orpin.vercel.app/foods')
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
                element: <AvailableFood/>,
                loader: () => fetch('https://food-hub-api-orpin.vercel.app/foods')
            },
            {
                path: '/add',
                element: <PrivateRoute><AddFood/></PrivateRoute>
            },
            {
                path: '/manage',
                element: <PrivateRoute><ManageFood/></PrivateRoute>,
                loader: () => fetch('https://food-hub-api-orpin.vercel.app/foods')
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateFood/></PrivateRoute>,
                loader: ({params}) => fetch(`https://food-hub-api-orpin.vercel.app/foods/${params.id}`)
            },
            {
                path: '/request',
                element: <PrivateRoute><MyRequest/></PrivateRoute>,
                loader: () => fetch('https://food-hub-api-orpin.vercel.app/requsts')
            },
            {
                path: '/food/:id',
                element: <PrivateRoute><SingleFood/></PrivateRoute>,
                loader: ({params}) => fetch(`https://food-hub-api-orpin.vercel.app/foods/${params.id}`)
            }
        ]
    }
    ]);

export default router;