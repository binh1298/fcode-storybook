import { PropsWithChildren } from "react";

import { ThemeProvider } from "@material-ui/core/styles";

import replyTheme from "src/theme/replyTheme";

const TestThemeProvider = (props: { children: PropsWithChildren<{}> }) => {
    return <ThemeProvider theme={replyTheme}>{props.children}</ThemeProvider>;
};

export default TestThemeProvider;
