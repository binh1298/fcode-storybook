const publicRuntimeConfig =
    process.env.NODE_ENV === "development"
        ? {
              API_ROOT_URL: "http://localhost:4000",
              REACT_APP_HASURA_END_POINT: "http://localhost:8080/v1/graphql",
              REACT_APP_HASURA_ADMIN_SECRET: process.env.REACT_APP_HASURA_ADMIN_SECRET || "",
          }
        : {
              API_ROOT_URL: "/api",
              REACT_APP_HASURA_END_POINT: "/v1/graphql",
              REACT_APP_HASURA_ADMIN_SECRET: process.env.REACT_APP_HASURA_ADMIN_SECRET || "",
          };

export const {
    API_ROOT_URL,
    REACT_APP_HASURA_END_POINT,
    REACT_APP_HASURA_ADMIN_SECRET,
} = publicRuntimeConfig;
