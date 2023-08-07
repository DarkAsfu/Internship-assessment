import { Link, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: '*',
        element: <h1>404 Error <Link to="/"><button className="btn btn-primary bg-[#cb16d1] px-10 py-4 text-white">Home</button></Link></h1>
    }
]);

export default router;
