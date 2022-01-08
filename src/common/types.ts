import { PreloadedQuery, UseQueryLoaderLoadQueryOptions } from "react-relay";
import { GraphQLTaggedNode, OperationType, VariablesOf } from "relay-runtime";
import { Maybe } from "src/generated/graphql";

export type PagePropsWithQuery<T extends OperationType> = {
    queryReference: PreloadedQuery<T>;
    loadQuery: (variables: VariablesOf<T>, options?: UseQueryLoaderLoadQueryOptions) => void;
};

export type QueryInfo = {
    query: GraphQLTaggedNode;
    preloadedQuery: PreloadedQuery<OperationType>;
    queryObject: any;
};

export interface IUser {
    name?: string;
    email?: string;
    isActive?: boolean;
    avatar?: Maybe<string>;
    userId?: string;
}
