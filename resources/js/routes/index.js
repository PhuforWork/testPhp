import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Admin from "../components/pages/Admin";
import CheckLogin from "../components/pages/CheckLogin";
import Editform from "../components/pages/editform";
import Home from "../components/pages/home";
import Mediaform from "../components/pages/mediaform";
import Register from "../components/pages/Register";
import Tableform from "../components/pages/tableform";

export default function Router() {
    const routing = useRoutes([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/",
                    element: <Admin />,
                    children: [
                        {
                            path: "/media-form",
                            element: <Mediaform />,
                        },
                        {
                            path: "/media-table",
                            element: <Tableform />,
                        },
                        {
                            path: "/edit-table/:id",
                            element: <Editform />,
                        },
                    ],
                },
                {
                    path: "/register",
                    element: <Register />,
                },
                {
                    path: "/login",
                    element: <CheckLogin />,
                },
            ],
        },
    ]);
    return routing;
}
