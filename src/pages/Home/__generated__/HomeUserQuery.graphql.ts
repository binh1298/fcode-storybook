/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomeUserQueryVariables = {};
export type HomeUserQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly userId: unknown;
        readonly email: string;
        readonly name: string;
        readonly avatar: string | null;
        readonly role: string;
    }>;
};
export type HomeUserQuery = {
    readonly response: HomeUserQueryResponse;
    readonly variables: HomeUserQueryVariables;
};



/*
query HomeUserQuery {
  users {
    userId
    email
    name
    avatar
    role
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "users",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatar",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "role",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeUserQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "09d01a3860a678179bc9e948bc34b064",
    "id": null,
    "metadata": {},
    "name": "HomeUserQuery",
    "operationKind": "query",
    "text": "query HomeUserQuery {\n  users {\n    userId\n    email\n    name\n    avatar\n    role\n  }\n}\n"
  }
};
})();
(node as any).hash = '621e83feaf9b93d015d5bbd0ee2458de';
export default node;
