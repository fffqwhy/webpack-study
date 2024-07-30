import React from "react";
import { Navigate, createHashRouter } from "react-router-dom";
import Todo from "../pages/home/todo";
import TestTable from "../pages/home/table";
import Home from "../pages/home";
import UserManagement from "../pages/userManagement";
import Globalization from "../pages/i18nComponent";
import WebSocketComponent from "../pages/userManagement/websocket";

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
        path: "i18n",
        element: <Globalization />
    },
    {
        path: "websocket",
        element: <WebSocketComponent />
    },
    {
        path: "",
        element: <Navigate to="home" />,
    },
]);

export default router;
