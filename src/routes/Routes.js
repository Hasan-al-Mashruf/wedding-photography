import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Blog from "../pages/Blog/Blog";
import Details from "../pages/Service/Details/Details";
import Signin from "../pages/Sign_in/Signin";
import Reviews from "../pages/Reviews/Reviews";
import Secured from "../pages/Secured/Secured";
import AddService from "../pages/AddService/AddService";
import Register from "../pages/Register/Register";
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
                loader: ({ params }) => fetch(`https://wedding-wesite-server.vercel.app/collections/${params.id}`),
                element: <Details />
            },
            { path: "/signin", element: <Signin /> },
            { path: "/reviews", element: <Secured><Reviews /></Secured> },
            { path: "/addService", element: <Secured><AddService /></Secured> },
            { path: "/register", element: <Register></Register> },
        ]
    },
]);