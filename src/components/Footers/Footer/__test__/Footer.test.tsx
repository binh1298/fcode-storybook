import { Theme, useTheme } from "@material-ui/core";

import Footer, { FooterProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<Footer />", () => {
    let props: FooterProps;
    let theme: Theme;
    const FooterTest = (props: FooterProps) => {
        theme = useTheme();
        return <Footer {...props} />;
    };

    it("should exist children with default color", () => {
        render(<FooterTest {...props} />);
        const footer = screen.getByTestId("Footer__root");
        expect(footer).toHaveStyle(`background-color: ${theme.palette.primary.main};`);
    });

    it("should exist children with secondary color", () => {
        props = {
            bgcolor: "secondary",
        };

        render(<FooterTest {...props} />);
        const footer = screen.getByTestId("Footer__root");
        expect(footer).toHaveStyle(`background-color: ${theme.palette.secondary.main};`);
    });
});
