import { Route, RouteProps, Redirect } from "react-router-dom";

import LocalStorageUtils from "src/utils/LocalStorageUtils";

const PublicRoute = (props: RouteProps) => {
    const user = LocalStorageUtils.getUser();
    if (!user?.email) {
        return <Route {...props} />;
    }

    return <Redirect to="/" />;
};
export default PublicRoute;
