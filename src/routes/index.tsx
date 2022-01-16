import { ComponentType } from "react";

import { loadQuery } from "react-relay";
import { Switch } from "react-router-dom";
import { QueryInfo } from "src/common/types";

import NavigationMenu from "src/components/NavigationMenu";

import RelayEnvironment from "../RelayEnvironment";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Comments from "src/pages/Comments";
import Home, { HomeUserGraphQL } from "src/pages/Home";
import Login from "src/pages/Login";
import Post from "src/pages/Post";

type RouteCustom = {
    path: string;
    name: string;
    exact: boolean;
    component: ComponentType<any>;
    queryInfo?: QueryInfo;
};

const publicRoutes: RouteCustom[] = [
    {
        path: "/login",
        name: "login",
        exact: true,
        component: Login,
    },
    {
        path: "/logout",
        name: "login",
        exact: true,
        component: Login,
    },
];

const privateRoutes: RouteCustom[] = [
    {
        path: "/posts",
        name: "posts",
        exact: true,
        component: Post,
    },
    {
        path: "/posts/:id",
        name: "postDetail",
        exact: true,
        component: Comments,
    },
    {
        path: "/",
        name: "home",
        exact: true,
        component: Home,
        queryInfo: {
            query: HomeUserGraphQL,
            preloadedQuery: loadQuery(RelayEnvironment, HomeUserGraphQL, {}),
            queryObject: Object,
        },
    },
];

export const Routes = () => {
    return (
        <Switch>
            {publicRoutes.map((route) => (
                <PublicRoute key={route.name} {...route} />
            ))}
            <>
                <NavigationMenu />

                {privateRoutes.map((route) => {
                    const { queryInfo, ...rest } = route;
                    return <PrivateRoute key={route.name} queryInfo={queryInfo} {...rest} />;
                })}
            </>
        </Switch>
    );
};
