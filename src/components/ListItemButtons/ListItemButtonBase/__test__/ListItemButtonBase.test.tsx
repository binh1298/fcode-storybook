import ListItemButtonBase, { ListItemButtonBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<ListItemButtonBase />", () => {
    let props: ListItemButtonBaseProps;

    const TestComponent = (props: ListItemButtonBaseProps) => (
        <TestThemeProvider>
            <ListItemButtonBase {...props} />
        </TestThemeProvider>
    );

    it("should exist children with default variant and color", () => {
        props = {
            children: "Test",
        };
        render(<TestComponent {...props} />);
        const listItemButtonBaseRoot = screen.getByTestId("ListItemButtonBase__root");

        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(listItemButtonBaseRoot).toHaveStyle(`
            justify-content: flex-start;
            color: ${replyTheme.palette.primary.contrastText};
        `);
    });

    it("should exist children with default variant and hightlight color", () => {
        props = {
            children: "Test",
            isHighlighted: true,
        };
        render(<TestComponent {...props} />);
        const listItemButtonBaseRoot = screen.getByTestId("ListItemButtonBase__root");

        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(listItemButtonBaseRoot).toHaveStyle(`
            justify-content: flex-start;
            color: ${replyTheme.palette.secondary.main};
        `);
    });
});
