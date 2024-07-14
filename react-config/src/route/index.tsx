import React from "react";
import { Navigate, createHashRouter } from "react-router-dom";
import Todo from "../pages/home/todo";
import TestTable from "../pages/home/table";
import Home from "../pages/home";
import UserManagement from "../pages/userManagement";

const router = createHashRouter([
    {
        path: "home",
        element: <Home />,
        children: [
            {
                path: "todo",
                element: <Todo />,
            },
            {
                path: "onePage",
                element: <TestTable />,
            },
            {
                path: "",
                element: <Navigate to="todo" />,
            },
        ],
    },
    {
        path: "user",
        element: <UserManagement />
    },
    {
        path: "",
        element: <Navigate to="home" />,
    },
]);

export default router;
