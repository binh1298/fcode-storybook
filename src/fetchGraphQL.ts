import { Variables } from "relay-runtime";

import { REACT_APP_HASURA_ADMIN_SECRET, REACT_APP_HASURA_END_POINT } from "./configuration";

async function fetchGraphQL(text: string | null | undefined, variables: Variables) {
    if (!REACT_APP_HASURA_END_POINT) throw new Error("Missing environment");
    const response = await fetch(REACT_APP_HASURA_END_POINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret": `${REACT_APP_HASURA_ADMIN_SECRET}`,
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });

    return await response.json();
}

export default fetchGraphQL;
