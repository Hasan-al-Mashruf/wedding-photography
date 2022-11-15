import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Blog from "../pages/Blog/Blog";
import Details from "../pages/Service/Details/Details";
import Signin from "../pages/Sign_in/Signin";
import Reviews from "../pages/Reviews/Reviews";
import Secured from "../pages/Secured/Secured";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/service", element: <Service /> },
            { path: "/blog", element: <Blog /> },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/collections/${params.id}`),
                element: <Details />
            },
            { path: "/signin", element: <Signin /> },
            { path: "/reviews", element: <Secured><Reviews /></Secured> }
        ]
    },
]);