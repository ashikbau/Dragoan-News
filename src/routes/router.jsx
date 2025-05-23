
import { createBrowserRouter, Navigate} from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import CategoryNews from '../components/pages/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element : <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: "",
                element : <Navigate to="/category/01"></Navigate>
            },
            {
                path: "/category/:id",
                element : <CategoryNews></CategoryNews>,
                loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
         
                
            
            },
        ]
    },
    {
        path: "/news",
        element : <h1>News Layout</h1>
    },
    {
        path: "auth",
        element :<AuthLayout></AuthLayout>,
        children : [
            {
                path : "/auth/login",
                element : <Login></Login>
            },
            {
                path : "/auth/register",
                element : <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element : <h1>Error</h1>
    },
])

export default router;