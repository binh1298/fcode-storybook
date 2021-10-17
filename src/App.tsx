import React, { Suspense } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { BrowserRouter } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import RelayEnvironment from "./RelayEnvironment";
import GraphQLQueryClientContextProvider from "./context/QueryClientContext";
import SnackbarProvider from "./context/SnackbarContext";
import { Routes } from "./routes";
import replyTheme from "./theme/replyTheme";

import "src/i18n/config";

const queryClient = new QueryClient();

function AppRoot() {
    return (
        <React.StrictMode>
            <ThemeProvider theme={replyTheme}>
                <RelayEnvironmentProvider environment={RelayEnvironment}>
                    <QueryClientProvider client={queryClient}>
                        <GraphQLQueryClientContextProvider>
                            <Suspense fallback={<CircularProgress />}>
                                <SnackbarProvider>
                                    <BrowserRouter>
                                        <Routes />
                                    </BrowserRouter>
                                </SnackbarProvider>
                            </Suspense>
                        </GraphQLQueryClientContextProvider>
                    </QueryClientProvider>
                </RelayEnvironmentProvider>
            </ThemeProvider>
        </React.StrictMode>
    );
}
export default AppRoot;
