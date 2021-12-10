import AlertBase, { AlertBaseProps } from "../";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<AlertBase />", () => {
    const props: AlertBaseProps = {
        children: "Test",
        severity: "success",
        variant: "filled",
    };

    beforeEach(() => {
        render(
            <TestThemeProvider>
                <AlertBase {...props} />
            </TestThemeProvider>
        );
    });

    it("should exist children", () => {
        const AlertBaseRoot = screen.getByTestId("AlertBase__root");

        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(AlertBaseRoot).toHaveStyle(`
        backgroundColor: ${replyTheme.palette.success.main};`);
    });
});
