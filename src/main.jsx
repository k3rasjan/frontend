import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import Login from "./authentication/Login.jsx";
import Register from "./authentication/Register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Creator from "./creator/Creator.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/lesson-creator",
                element: <Creator />,
            },
        ],
    },
    {
        path: "/login/",
        element: <Login />,
    },
    {
        path: "/register/",
        element: <Register />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
