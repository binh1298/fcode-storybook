async function fetchGraphQL(text, variables) {
    const REACT_APP_HASURA_ADMIN_SECRET = process.env.REACT_APP_HASURA_ADMIN_SECRET;
    const REACT_APP_HASURA_END_POINT = process.env.REACT_APP_HASURA_END_POINT;
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
