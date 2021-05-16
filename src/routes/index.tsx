import React from "react";

import { Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Post from "../pages/Post";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const publicRoutes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
];

export const privateRoutes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/posts",
        name: "posts",
        component: Post,
    },
    {
        path: "/posts/:id",
        name: "postDetail",
        component: Post,
    },
];

export const Routes = (
    <Switch>
        {publicRoutes.map((route) => (
            <PublicRoute
                key={route.name}
                exact={true}
                path={route.path}
                component={route.component}
            />
        ))}
        {privateRoutes.map((route) => (
            <PrivateRoute key={route.name} path={route.path} component={route.component} />
        ))}
    </Switch>
);
