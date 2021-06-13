/* tslint:disable */

/* eslint-disable */
// @ts-nocheck
import { ConcreteRequest } from "relay-runtime";

export type posts_bool_exp = {
    _and?: Array<posts_bool_exp | null> | null;
    _not?: posts_bool_exp | null;
    _or?: Array<posts_bool_exp | null> | null;
    authorId?: uuid_comparison_exp | null;
    content?: String_comparison_exp | null;
    createdAt?: timestamp_comparison_exp | null;
    deletedAt?: timestamp_comparison_exp | null;
    postId?: uuid_comparison_exp | null;
    title?: String_comparison_exp | null;
    updatedAt?: timestamp_comparison_exp | null;
    user?: users_bool_exp | null;
};
export type uuid_comparison_exp = {
    _eq?: unknown | null;
    _gt?: unknown | null;
    _gte?: unknown | null;
    _in?: Array<unknown> | null;
    _is_null?: boolean | null;
    _lt?: unknown | null;
    _lte?: unknown | null;
    _neq?: unknown | null;
    _nin?: Array<unknown> | null;
};
export type String_comparison_exp = {
    _eq?: string | null;
    _gt?: string | null;
    _gte?: string | null;
    _ilike?: string | null;
    _in?: Array<string> | null;
    _is_null?: boolean | null;
    _like?: string | null;
    _lt?: string | null;
    _lte?: string | null;
    _neq?: string | null;
    _nilike?: string | null;
    _nin?: Array<string> | null;
    _nlike?: string | null;
    _nsimilar?: string | null;
    _similar?: string | null;
};
export type timestamp_comparison_exp = {
    _eq?: unknown | null;
    _gt?: unknown | null;
    _gte?: unknown | null;
    _in?: Array<unknown> | null;
    _is_null?: boolean | null;
    _lt?: unknown | null;
    _lte?: unknown | null;
    _neq?: unknown | null;
    _nin?: Array<unknown> | null;
};
export type users_bool_exp = {
    _and?: Array<users_bool_exp | null> | null;
    _not?: users_bool_exp | null;
    _or?: Array<users_bool_exp | null> | null;
    avatar?: String_comparison_exp | null;
    email?: String_comparison_exp | null;
    isActive?: Boolean_comparison_exp | null;
    name?: String_comparison_exp | null;
    posts?: posts_bool_exp | null;
    role?: String_comparison_exp | null;
    userId?: uuid_comparison_exp | null;
};
export type Boolean_comparison_exp = {
    _eq?: boolean | null;
    _gt?: boolean | null;
    _gte?: boolean | null;
    _in?: Array<boolean> | null;
    _is_null?: boolean | null;
    _lt?: boolean | null;
    _lte?: boolean | null;
    _neq?: boolean | null;
    _nin?: Array<boolean> | null;
};
export type UpSertPostLoadPostQueryVariables = {
    where?: posts_bool_exp | null;
};
export type UpSertPostLoadPostQueryResponse = {
    readonly posts: ReadonlyArray<{
        readonly postId: unknown;
        readonly title: string;
        readonly content: string;
        readonly authorId: unknown | null;
    }>;
};
export type UpSertPostLoadPostQuery = {
    readonly response: UpSertPostLoadPostQueryResponse;
    readonly variables: UpSertPostLoadPostQueryVariables;
};

/*
query UpSertPostLoadPostQuery(
  $where: posts_bool_exp
) {
  posts(where: $where) {
    postId
    title
    content
    authorId
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "where",
            },
        ],
        v1 = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "where",
                        variableName: "where",
                    },
                ],
                concreteType: "posts",
                kind: "LinkedField",
                name: "posts",
                plural: true,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "postId",
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title",
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "content",
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "authorId",
                        storageKey: null,
                    },
                ],
                storageKey: null,
            },
        ];
    return {
        fragment: {
            argumentDefinitions: v0 /*: any*/,
            kind: "Fragment",
            metadata: null,
            name: "UpSertPostLoadPostQuery",
            selections: v1 /*: any*/,
            type: "query_root",
            abstractKey: null,
        },
        kind: "Request",
        operation: {
            argumentDefinitions: v0 /*: any*/,
            kind: "Operation",
            name: "UpSertPostLoadPostQuery",
            selections: v1 /*: any*/,
        },
        params: {
            cacheID: "8d8f1d69c697f4f0bc565e5e09eb7fd0",
            id: null,
            metadata: {},
            name: "UpSertPostLoadPostQuery",
            operationKind: "query",
            text:
                "query UpSertPostLoadPostQuery(\n  $where: posts_bool_exp\n) {\n  posts(where: $where) {\n    postId\n    title\n    content\n    authorId\n  }\n}\n",
        },
    };
})();
(node as any).hash = "87d32e3df782d9cc0afb2adbf195ee21";
export default node;
