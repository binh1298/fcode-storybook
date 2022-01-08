import { PreloadedQuery, UseQueryLoaderLoadQueryOptions } from "react-relay";
import { GraphQLTaggedNode, OperationType, VariablesOf } from "relay-runtime";
import { Users } from "src/generated/graphql";

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
    name?: Users["name"];
    email?: Users["email"];
    isActive?: Users["isActive"];
    avatar?: Users["avatar"];
    userId?: Users["userId"];
}
