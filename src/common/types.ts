import { ComponentType } from "react";

import { PreloadedQuery, UseQueryLoaderLoadQueryOptions } from "react-relay";
import { GraphQLTaggedNode, OperationType, VariablesOf } from "relay-runtime";

export type PagePropsWithQuery<T extends OperationType> = {
    queryReference: PreloadedQuery<T>;
    loadQuery: (variables: VariablesOf<T>, options?: UseQueryLoaderLoadQueryOptions) => void;
};

export type QueryInfo = {
    query: GraphQLTaggedNode;
    preloadedQuery: PreloadedQuery<OperationType>;
    queryObject: any;
};

export type RouteCustom = {
    path: string;
    name: string;
    component: ComponentType<any>;
    queryInfo?: QueryInfo;
};

export type ErrorResponse = {
    response: {
        errors: Error[];
    };
};

export type Error = {
    extensions: {
        path: string;
        code: string;
    };
    message: string;
};
