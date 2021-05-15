import React from "react";

import { Route, RouteProps, Redirect } from "react-router-dom";

const PrivateRoute = (props: RouteProps) => {
    const user: string = "test";
    if (user) {
        return <Route {...props} />;
    }

    return <Redirect to="/login" />;
};
export default PrivateRoute;
