import React, { Suspense } from "react";

import { RelayEnvironmentProvider } from "react-relay/hooks";
import { BrowserRouter } from "react-router-dom";

import SpinnerBase from "./components/Spinner/SpinnerBase";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import RelayEnvironment from "./RelayEnvironment";
import { Routes } from "./routes";
import replyTheme from "./theme/replyTheme";

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
    return (
        <React.StrictMode>
            <ThemeProvider theme={replyTheme}>
                <RelayEnvironmentProvider environment={RelayEnvironment}>
                    <Suspense fallback={<SpinnerBase />}>
                        <BrowserRouter>
                            <Routes />
                        </BrowserRouter>
                    </Suspense>
                </RelayEnvironmentProvider>
            </ThemeProvider>
        </React.StrictMode>
    );
}
export default AppRoot;
