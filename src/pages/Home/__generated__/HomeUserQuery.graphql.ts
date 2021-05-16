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
    "cacheID": "e83d758ac58579e54c36dcd3077cd2e3",
    "id": null,
    "metadata": {},
    "name": "HomeUserQuery",
    "operationKind": "query",
    "text": "query HomeUserQuery {\n  users {\n    userId\n    email\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '7e009af1573dca2515a74d7dbd54bdda';
export default node;
