import { useTheme, Theme } from "@material-ui/core";
import { Add as AddIcon, Edit as EditIcon } from "@material-ui/icons";

import IconButtonBase, { IconButtonBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<IconButtonBase />", () => {
    let props: IconButtonBaseProps;
    let theme: Theme;
    const IconButtonBaseTest = (props: IconButtonBaseProps) => {
        theme = useTheme();
        return <IconButtonBase {...props} />;
    };

    it("should exist children with primary color", () => {
        props = {
            children: <AddIcon />,
            color: "primary",
        };
        render(<IconButtonBaseTest {...props} />);
        const muiIconButton = screen.getByTestId("IconButtonBase__root");
        expect(muiIconButton).toHaveStyle(`color: ${theme.palette.primary.main};`);
    });

    it("should exist children with secondary color", () => {
        props = {
            children: <EditIcon />,
            color: "secondary",
        };
        render(<IconButtonBaseTest {...props} />);
        const muiIconButton = screen.getByTestId("IconButtonBase__root");
        expect(muiIconButton).toHaveStyle(`color: ${theme.palette.secondary.main};`);
    });
});
