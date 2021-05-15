import React from "react";

import { Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const publicRoutes = [
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
];

export const privateRoutes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/posts",
        name: "posts",
        component: PostPage,
    },
    {
        path: "/posts/:id",
        name: "postDetail",
        component: PostPage,
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
