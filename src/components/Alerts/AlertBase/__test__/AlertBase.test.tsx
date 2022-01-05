import AlertBase, { AlertBaseProps } from "../";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<AlertBase />", () => {
    const props: AlertBaseProps = {
        children: "Test",
        severity: "success",
    };

    const TestComponent = (props: AlertBaseProps) => (
        <TestThemeProvider>
            <AlertBase {...props} />
        </TestThemeProvider>
    );

    it("should exist children", () => {
        render(<TestComponent {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should display filled when variant is undefined", () => {
        render(<TestComponent {...props} />);
        const AlertBaseRoot = screen.getByTestId("AlertBase__root");

        expect(AlertBaseRoot).toHaveStyle(`
        backgroundColor: ${replyTheme.palette.success.main};`);
        expect(AlertBaseRoot).toHaveClass("MuiAlert-filledSuccess");
    });

    it("should display another variant when select this", () => {
        render(<TestComponent {...props} variant="outlined" />);
        const AlertBaseRoot = screen.getByTestId("AlertBase__root");

        expect(AlertBaseRoot).toHaveStyle(`
        backgroundColor: ${replyTheme.palette.success.main};`);
        expect(AlertBaseRoot).toHaveClass("MuiAlert-outlinedSuccess");
    });
});
