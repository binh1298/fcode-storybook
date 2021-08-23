import { Theme, useTheme } from "@material-ui/core";

import CircularProgressBase, { CircularProgressBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<CircularProgressBase />", () => {
    let props: CircularProgressBaseProps;
    let theme: Theme;
    const CircularProgressBaseTest = (props: CircularProgressBaseProps) => {
        theme = useTheme();
        return <CircularProgressBase {...props} />;
    };

    it("should exist children with default color", () => {
        render(<CircularProgressBaseTest {...props} />);
        const muiCircularProgress = screen.getByTestId("CircularProgressBase__root");
        expect(muiCircularProgress).toHaveStyle(`color: ${theme.palette.primary.main};`);
    });

    it("should exist children with secondary color", () => {
        props = {
            color: "secondary",
        };

        render(<CircularProgressBaseTest {...props} />);
        const muiCircularProgress = screen.getByTestId("CircularProgressBase__root");
        expect(muiCircularProgress).toHaveStyle(`color: ${theme.palette.secondary.main};`);
    });
});
