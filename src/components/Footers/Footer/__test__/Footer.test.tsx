import Footer, { FooterProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<Footer />", () => {
    let props: FooterProps;

    const TestComponent = (props: FooterProps) => (
        <TestThemeProvider>
            <Footer {...props} />
        </TestThemeProvider>
    );

    it("should exist children with default color", () => {
        render(<TestComponent />);
        const footer = screen.getByTestId("Footer__root");

        expect(footer).toHaveStyle(`background-color: ${replyTheme.palette.primary.main};`);
    });

    it("should exist children with secondary color", () => {
        props = {
            bgcolor: "secondary",
        };
        render(<TestComponent {...props} />);
        const footer = screen.getByTestId("Footer__root");

        expect(footer).toHaveStyle(`background-color: ${replyTheme.palette.secondary.main};`);
    });
});
