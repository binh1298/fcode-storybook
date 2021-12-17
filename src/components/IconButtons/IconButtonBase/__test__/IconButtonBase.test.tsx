import { Add as AddIcon, Edit as EditIcon } from "@mui/icons-material";

import IconButtonBase, { IconButtonBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<IconButtonBase />", () => {
    let props: IconButtonBaseProps;

    const TestComponent = (props: IconButtonBaseProps) => (
        <TestThemeProvider>
            <IconButtonBase {...props} />
        </TestThemeProvider>
    );

    it("should exist children with primary color", () => {
        props = {
            children: <AddIcon />,
            color: "primary",
        };
        render(<TestComponent {...props} />);
        const IconButtonBaseRoot = screen.getByTestId("IconButtonBase__root");

        expect(IconButtonBaseRoot).toHaveStyle(`color: ${replyTheme.palette.primary.main};`);
    });

    it("should exist children with secondary color", () => {
        props = {
            children: <EditIcon />,
            color: "secondary",
        };
        render(<TestComponent {...props} />);
        const IconButtonBaseRoot = screen.getByTestId("IconButtonBase__root");

        expect(IconButtonBaseRoot).toHaveStyle(`color: ${replyTheme.palette.secondary.main};`);
    });
});
