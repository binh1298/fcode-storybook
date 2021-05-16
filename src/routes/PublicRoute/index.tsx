import React, { Component } from "react";

import { Route, RouteProps, Redirect } from "react-router-dom";

import LocalStorageUtils from "../../utils/LocalStorageUtils";

const PublicRoute = (props: RouteProps) => {
    const user = LocalStorageUtils.getUser();
    if (!user) {
        return <Route {...props} />;
    }

    return <Redirect to="/" />;
};
export default PublicRoute;
