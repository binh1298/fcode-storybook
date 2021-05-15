import React, { Component } from "react";

import { Route, RouteProps, Redirect } from "react-router-dom";

const PublicRoute = (props: RouteProps) => {
    const user: string = "Test";
    if (!user) {
        return <Route {...props} />;
    }

    return <Redirect to="/" />;
};
export default PublicRoute;
