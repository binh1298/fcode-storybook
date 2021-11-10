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
