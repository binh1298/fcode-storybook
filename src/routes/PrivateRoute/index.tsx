import { ComponentType } from "react";

import { Redirect, Route, RouteProps } from "react-router-dom";
import { PagePropsWithQuery, QueryInfo } from "src/common/types";

import withQuery from "src/hoc/withQuery";
import LocalStorageUtils from "src/utils/LocalStorageUtils";

interface CustomRouteProps extends Omit<RouteProps, "component"> {
    component: ComponentType<PagePropsWithQuery<any>>;
}
const PrivateRoute = (props: { routeProps: CustomRouteProps; queryInfo?: QueryInfo }) => {
    const user = LocalStorageUtils.getUser();
    if (!user?.email) return <Redirect to="/login" />;

    if (!props.queryInfo) return <Route {...props.routeProps} />;

    const { component, ...rest } = props.routeProps;
    const { queryObject, query, preloadedQuery } = props.queryInfo;
    const finalComponent = !props.queryInfo
        ? component
        : component && withQuery<typeof queryObject>(component, query, preloadedQuery);
    return <Route {...rest} component={finalComponent} />;
};
export default PrivateRoute;
