import { Theme, useTheme } from "@material-ui/core";

import FooterBase, { FooterBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<FooterBase />", () => {
    let props: FooterBaseProps;
    let theme: Theme;
    const FooterBaseTest = (props: FooterBaseProps) => {
        theme = useTheme();
        return <FooterBase {...props} />;
    };

    it("should exist children with default color", () => {
        render(<FooterBaseTest {...props} />);
        const footer = screen.getByTestId("FooterBase__root");
        expect(footer).toHaveStyle(`background-color: ${theme.palette.primary.main};`);
    });

    it("should exist children with secondary color", () => {
        props = {
            bgcolor: "secondary",
        };

        render(<FooterBaseTest {...props} />);
        const footer = screen.getByTestId("FooterBase__root");
        expect(footer).toHaveStyle(`background-color: ${theme.palette.secondary.main};`);
    });
});
