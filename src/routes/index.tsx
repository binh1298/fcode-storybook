import { loadQuery } from "react-relay";
import { Switch } from "react-router-dom";
import { RouteCustom } from "src/common/types";

import RelayEnvironment from "../RelayEnvironment";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Home, { HomeUserGraphQL } from "src/pages/Home";
import Login from "src/pages/Login";
import Post from "src/pages/Post";
import UpSertPost, { UpSertPostLoadPostGraphQL } from "src/pages/UpSertPost";

// import {
//     UpSertPostLoadPostQuery,
//     uuid_comparison_exp,
// } from "src/pages/UpSertPost/__generated__/UpSertPostLoadPostQuery.graphql";

const publicRoutes: RouteCustom[] = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
];

const privateRoutes: RouteCustom[] = [
    {
        path: "/",
        name: "home",
        component: Home,
        queryInfo: {
            query: HomeUserGraphQL,
            preloadedQuery: loadQuery(RelayEnvironment, HomeUserGraphQL, {}),
            queryObject: Object,
        },
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
    {
        path: "/create/posts",
        name: "createPosts",
        component: UpSertPost,
    },
    {
        path: "/update/posts/:id",
        name: "updatePosts",
        component: UpSertPost,
        queryInfo: {
            query: UpSertPostLoadPostGraphQL,
            preloadedQuery: loadQuery(RelayEnvironment, UpSertPostLoadPostGraphQL, {}),
            queryObject: Object,
        },
    },
];

export const Routes = () => {
    return (
        <Switch>
            {publicRoutes.map((route) => (
                <PublicRoute key={route.name} exact={true} {...route} />
            ))}
            {privateRoutes.map((route) => {
                const { queryInfo, ...rest } = route;
                return <PrivateRoute key={route.name} routeProps={rest} queryInfo={queryInfo} />;
            })}
        </Switch>
    );
};
