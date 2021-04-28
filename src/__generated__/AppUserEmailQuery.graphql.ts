/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppUserEmailQueryVariables = {};
export type AppUserEmailQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: unknown;
        readonly email: string;
        readonly name: string;
    }>;
};
export type AppUserEmailQuery = {
    readonly response: AppUserEmailQueryResponse;
    readonly variables: AppUserEmailQueryVariables;
};



/*
query AppUserEmailQuery {
  users {
    id
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
        "name": "id",
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
    "name": "AppUserEmailQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppUserEmailQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "14801dd466a09ab378da212393c784d9",
    "id": null,
    "metadata": {},
    "name": "AppUserEmailQuery",
    "operationKind": "query",
    "text": "query AppUserEmailQuery {\n  users {\n    id\n    email\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ba0a557122a50d767a08b7df8a887123';
export default node;
