import { loadQuery } from "react-relay";
import { Switch } from "react-router-dom";
import { RouteCustom } from "src/common/types";

import RelayEnvironment from "../RelayEnvironment";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Comments from "src/pages/Comments";
import Home, { HomeUserGraphQL } from "src/pages/Home";
import Login from "src/pages/Login";
import Post from "src/pages/Post";
import InsertPage from "src/pages/UpSertUser/InsertPage";
import UpdatePage from "src/pages/UpSertUser/UpdatePage";
import User from "src/pages/Users";

//

//

const publicRoutes: RouteCustom[] = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/users/create",
        name: "user-create",
        component: InsertPage,
    },
    {
        path: "/users/:id",
        name: "user-detail",
        component: UpdatePage,
    },
    {
        path: "/user",
        name: "user",
        component: User,
    },
    {
        path: "/logout",
        name: "login",
        component: Login,
    },
];

const privateRoutes: RouteCustom[] = [
    {
        path: "/comments",
        name: "comments",
        component: Comments,
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
        path: "/",
        name: "home",
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
                <PublicRoute key={route.name} exact={true} {...route} />
            ))}
            {privateRoutes.map((route) => {
                const { queryInfo, ...rest } = route;
                return <PrivateRoute key={route.name} queryInfo={queryInfo} {...rest} />;
            })}
        </Switch>
    );
};
