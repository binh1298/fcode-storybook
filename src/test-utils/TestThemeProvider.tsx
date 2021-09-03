import { ReactElement } from "react";

import { ThemeProvider } from "@material-ui/core/styles";

import replyTheme from "src/theme/replyTheme";

const TestThemeProvider = (props: { children: ReactElement }) => {
    return <ThemeProvider theme={replyTheme}>{props.children}</ThemeProvider>;
};

export default TestThemeProvider;
