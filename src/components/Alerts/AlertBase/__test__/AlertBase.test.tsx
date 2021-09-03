import { ThemeProvider } from "@material-ui/core";

import AlertBase, { AlertBaseProps } from "../";

import { render, screen } from "@testing-library/react";
import replyTheme from "src/theme/replyTheme";

describe("<AlertBase />", () => {
    const props: AlertBaseProps = {
        children: "Test",
        severity: "success",
    };

    const AlertBaseTest = (props: AlertBaseProps) => {
        return (
            <ThemeProvider theme={replyTheme}>
                <AlertBase {...props} />;
            </ThemeProvider>
        );
    };

    it("should exist children", () => {
        render(<AlertBaseTest {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should display filled when variant is undefined", () => {
        render(<AlertBaseTest {...props} />);
        const container = screen.getByTestId("AlertBase__root");
        expect(container).toHaveClass("MuiAlert-filledSuccess");
    });

    it("should display another variant when select this", () => {
        render(<AlertBaseTest {...props} variant="outlined" />);
        const container = screen.getByTestId("AlertBase__root");
        expect(container).toHaveClass("MuiAlert-outlinedSuccess");
    });
});
