import DividerBase, { DividerBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<DividerBase />", () => {
    let props: DividerBaseProps;

    const TestComponent = (props: DividerBaseProps) => (
        <TestThemeProvider>
            <DividerBase {...props} />
        </TestThemeProvider>
    );

    it("should exist children with default color", () => {
        render(<TestComponent />);
        const dividerBaseRoot = screen.getByTestId("DividerBase__root");

        expect(dividerBaseRoot).toHaveStyle(`border-color: ${replyTheme.palette.common.white};`);
    });

    it("should exist children with hightlighted color", () => {
        props = {
            isHighlighted: true,
        };

        render(<TestComponent {...props} />);
        const dividerBaseRoot = screen.getByTestId("DividerBase__root");

        expect(dividerBaseRoot).toHaveStyle(`border-color: ${replyTheme.palette.secondary.main};`);
    });
});
