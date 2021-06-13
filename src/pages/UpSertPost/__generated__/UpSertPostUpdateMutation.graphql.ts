/* tslint:disable */

/* eslint-disable */
// @ts-nocheck
import { ConcreteRequest } from "relay-runtime";

export type posts_set_input = {
    authorId?: unknown | null;
    content?: string | null;
    createdAt?: unknown | null;
    deletedAt?: unknown | null;
    postId?: unknown | null;
    title?: string | null;
    updatedAt?: unknown | null;
};
export type posts_pk_columns_input = {
    postId: unknown;
};
export type UpSertPostUpdateMutationVariables = {
    post?: posts_set_input | null;
    pk: posts_pk_columns_input;
};
export type UpSertPostUpdateMutationResponse = {
    readonly update_posts_by_pk: {
        readonly postId: unknown;
        readonly updatedAt: unknown;
    } | null;
};
export type UpSertPostUpdateMutation = {
    readonly response: UpSertPostUpdateMutationResponse;
    readonly variables: UpSertPostUpdateMutationVariables;
};

/*
mutation UpSertPostUpdateMutation(
  $post: posts_set_input
  $pk: posts_pk_columns_input!
) {
  update_posts_by_pk(_set: $post, pk_columns: $pk) {
    postId
    updatedAt
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "pk",
        },
        v1 = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "post",
        },
        v2 = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "_set",
                        variableName: "post",
                    },
                    {
                        kind: "Variable",
                        name: "pk_columns",
                        variableName: "pk",
                    },
                ],
                concreteType: "posts",
                kind: "LinkedField",
                name: "update_posts_by_pk",
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
                        name: "updatedAt",
                        storageKey: null,
                    },
                ],
                storageKey: null,
            },
        ];
    return {
        fragment: {
            argumentDefinitions: [v0 /*: any*/, v1 /*: any*/],
            kind: "Fragment",
            metadata: null,
            name: "UpSertPostUpdateMutation",
            selections: v2 /*: any*/,
            type: "mutation_root",
            abstractKey: null,
        },
        kind: "Request",
        operation: {
            argumentDefinitions: [v1 /*: any*/, v0 /*: any*/],
            kind: "Operation",
            name: "UpSertPostUpdateMutation",
            selections: v2 /*: any*/,
        },
        params: {
            cacheID: "4befa53c64c00bc96387904bf4d0640d",
            id: null,
            metadata: {},
            name: "UpSertPostUpdateMutation",
            operationKind: "mutation",
            text:
                "mutation UpSertPostUpdateMutation(\n  $post: posts_set_input\n  $pk: posts_pk_columns_input!\n) {\n  update_posts_by_pk(_set: $post, pk_columns: $pk) {\n    postId\n    updatedAt\n  }\n}\n",
        },
    };
})();
(node as any).hash = "56e086b27ad24b0ac4388e91fa5276d0";
export default node;
