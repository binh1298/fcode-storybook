import { ComponentType } from "react";

import { Redirect, Route, RouteProps } from "react-router-dom";
import { PagePropsWithQuery, QueryInfo } from "src/common/types";

import withQuery from "src/hoc/withQuery";
import LocalStorageUtils from "src/utils/LocalStorageUtils";

interface CustomRouteProps extends Omit<RouteProps, "component"> {
    component: ComponentType<PagePropsWithQuery<any>>;
    queryInfo?: QueryInfo;
}
const PrivateRoute = (props: CustomRouteProps) => {
    const user = LocalStorageUtils.getUser();
    if (!user?.email) return <Redirect to="/login" />;
    if (!props.queryInfo) return <Route {...props} />;

    const { component, ...rest } = props;
    const { queryObject, query, preloadedQuery } = props.queryInfo;

    const FinalComponent = withQuery<typeof queryObject>(component, query, preloadedQuery);
    return (
        <Route {...rest}>
            <FinalComponent />
        </Route>
    );
};
export default PrivateRoute;
