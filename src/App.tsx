import React, { Suspense } from "react";

import graphql from "babel-plugin-relay/macro";
import {
    loadQuery,
    RelayEnvironmentProvider,
    usePreloadedQuery,
    Variables,
} from "react-relay/hooks";

import ButtonBase from "./components/Buttons/ButtonBase";
import { CircularProgress } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import "./App.css";
import RelayEnvironment from "./RelayEnvironment";
import { AppUserEmailQueryResponse } from "./__generated__/AppUserEmailQuery.graphql";
import replyTheme from "./theme/replyTheme";

// Define a query
const UserEmailQuery = graphql`
    query AppUserEmailQuery {
        users {
            id
            email
            name
        }
    }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, UserEmailQuery, {});
function App(props: { preloadedQuery: any }) {
    const data = usePreloadedQuery<{ variables: Variables; response: AppUserEmailQueryResponse }>(
        UserEmailQuery,
        props.preloadedQuery
    );
    return (
        <React.StrictMode>
            <ThemeProvider theme={replyTheme}>
                <header className="App-header">
                    <ButtonBase variant="contained" color="primary">
                        Welcome FCode Storybook Team. <br /> Run yarn storybook
                    </ButtonBase>
                    <br />
                    <ButtonBase variant="contained" color="primary">
                        The first user is {data.users[0].name}
                    </ButtonBase>
                </header>
            </ThemeProvider>
        </React.StrictMode>
    );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={<CircularProgress />}>
                <App preloadedQuery={preloadedQuery} />
            </Suspense>
        </RelayEnvironmentProvider>
    );
}
export default AppRoot;
