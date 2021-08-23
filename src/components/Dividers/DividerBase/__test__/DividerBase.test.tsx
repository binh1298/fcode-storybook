import { Theme, useTheme } from "@material-ui/core";

import DividerBase, { DividerBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<DividerBase />", () => {
    let props: DividerBaseProps;
    let theme: Theme;
    const DividerBaseTest = (props: DividerBaseProps) => {
        theme = useTheme();
        return <DividerBase {...props} />;
    };

    it("should exist children with default color", () => {
        render(<DividerBaseTest {...props} />);
        const muiDivider = screen.getByTestId("DividerBase__root");
        expect(muiDivider).toHaveStyle(`background-color: ${theme.palette.common.white};`);
    });

    it("should exist children with hightlighted color", () => {
        props = {
            highlighted: true,
        };

        render(<DividerBaseTest {...props} />);
        const muiDivider = screen.getByTestId("DividerBase__root");
        expect(muiDivider).toHaveStyle(`background-color: ${theme.palette.secondary.main};`);
    });
});
