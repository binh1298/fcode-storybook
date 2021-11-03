import { PropsWithChildren } from "react";

import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import replyTheme from "src/theme/replyTheme";

const TestThemeProvider = (props: { children: PropsWithChildren<{}> }) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={replyTheme}>{props.children}</ThemeProvider>
        </StyledEngineProvider>
    );
};

export default TestThemeProvider;
