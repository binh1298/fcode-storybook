import { PropsWithChildren } from "react";

import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";

import replyTheme from "src/theme/replyTheme";

declare module "@mui/styles/defaultTheme" {
    interface DefaultTheme extends Theme {}
}

const TestThemeProvider = (props: { children: PropsWithChildren<{}> }) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={replyTheme}>{props.children}</ThemeProvider>
        </StyledEngineProvider>
    );
};

export default TestThemeProvider;
