/* tslint:disable */

/* eslint-disable */
// @ts-nocheck
import { ConcreteRequest } from "relay-runtime";

export type posts_constraint = "PK_cdc670193be6ca43f590dbabcee" | "%future added value";
export type posts_update_column =
    | "authorId"
    | "content"
    | "createdAt"
    | "deletedAt"
    | "postId"
    | "title"
    | "updatedAt"
    | "%future added value";
export type users_constraint =
    | "PK_8bf09ba754322ab9c22a215c919"
    | "UQ_97672ac88f789774dd47f7c8be3"
    | "%future added value";
export type users_update_column =
    | "avatar"
    | "email"
    | "isActive"
    | "name"
    | "role"
    | "userId"
    | "%future added value";
export type posts_insert_input = {
    authorId?: unknown | null;
    content?: string | null;
    createdAt?: unknown | null;
    deletedAt?: unknown | null;
    postId?: unknown | null;
    title?: string | null;
    updatedAt?: unknown | null;
    user?: users_obj_rel_insert_input | null;
};
export type users_obj_rel_insert_input = {
    data: users_insert_input;
    on_conflict?: users_on_conflict | null;
};
export type users_insert_input = {
    avatar?: string | null;
    email?: string | null;
    isActive?: boolean | null;
    name?: string | null;
    posts?: posts_arr_rel_insert_input | null;
    role?: string | null;
    userId?: unknown | null;
};
export type posts_arr_rel_insert_input = {
    data: Array<posts_insert_input>;
    on_conflict?: posts_on_conflict | null;
};
export type posts_on_conflict = {
    constraint: posts_constraint;
    update_columns: Array<posts_update_column>;
    where?: posts_bool_exp | null;
};
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
export type users_on_conflict = {
    constraint: users_constraint;
    update_columns: Array<users_update_column>;
    where?: users_bool_exp | null;
};
export type UpSertPostCreateMutationVariables = {
    input: posts_insert_input;
};
export type UpSertPostCreateMutationResponse = {
    readonly insert_posts_one: {
        readonly postId: unknown;
        readonly createdAt: unknown;
    } | null;
};
export type UpSertPostCreateMutation = {
    readonly response: UpSertPostCreateMutationResponse;
    readonly variables: UpSertPostCreateMutationVariables;
};

/*
mutation UpSertPostCreateMutation(
  $input: posts_insert_input!
) {
  insert_posts_one(object: $input) {
    postId
    createdAt
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "input",
            },
        ],
        v1 = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "object",
                        variableName: "input",
                    },
                ],
                concreteType: "posts",
                kind: "LinkedField",
                name: "insert_posts_one",
                plural: false,
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
                        name: "createdAt",
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
            name: "UpSertPostCreateMutation",
            selections: v1 /*: any*/,
            type: "mutation_root",
            abstractKey: null,
        },
        kind: "Request",
        operation: {
            argumentDefinitions: v0 /*: any*/,
            kind: "Operation",
            name: "UpSertPostCreateMutation",
            selections: v1 /*: any*/,
        },
        params: {
            cacheID: "d0fbf6146e25bf41c47dfe305830382e",
            id: null,
            metadata: {},
            name: "UpSertPostCreateMutation",
            operationKind: "mutation",
            text:
                "mutation UpSertPostCreateMutation(\n  $input: posts_insert_input!\n) {\n  insert_posts_one(object: $input) {\n    postId\n    createdAt\n  }\n}\n",
        },
    };
})();
(node as any).hash = "7fbf9d2bbed345ba35645d6a667a254f";
export default node;
