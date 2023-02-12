import {createBrowserRouter} from "react-router-dom";
import Home from '../pages/Home';
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Board from "../pages/Board";
import Workspace from "../pages/Workspace";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/board/:group",
        element: <Workspace/>
    },
    {
        path: "/board/:group/:board",
        element: <Board/>
    }
]);

export default router;
