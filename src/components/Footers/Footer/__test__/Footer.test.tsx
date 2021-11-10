import Footer, { FooterProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";

describe("<Footer />", () => {
    let props: FooterProps;
    const primaryColor = "#344955";
    const secondaryColor = "#F9AA33";

    it("should exist children with default color", () => {
        render(
            <TestThemeProvider>
                <Footer {...props} />
            </TestThemeProvider>
        );
        const footer = screen.getByTestId("Footer__root");

        expect(footer).toHaveStyle(`background-color: ${primaryColor};`);
    });

    it("should exist children with secondary color", () => {
        props = {
            bgcolor: "secondary",
        };

        render(
            <TestThemeProvider>
                <Footer {...props} />
            </TestThemeProvider>
        );
        const footer = screen.getByTestId("Footer__root");
        expect(footer).toHaveStyle(`background-color: ${secondaryColor};`);
    });
});
