import React from "react";

import { Route, RouteProps, Redirect } from "react-router-dom";

import LocalStorageUtils from "../../utils/LocalStorageUtils";

const PrivateRoute = (props: RouteProps) => {
    const user = LocalStorageUtils.getUser();
    if (user) {
        return <Route {...props} />;
    }

    return <Redirect to="/login" />;
};
export default PrivateRoute;
