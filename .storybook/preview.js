import replyTheme from "../src/theme/replyTheme";

import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

export const decorators = [
    (Story) => (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={replyTheme}>
                <Story />
            </ThemeProvider>
        </StyledEngineProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            date: /Date$/,
        },
    },
};
