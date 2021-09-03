import DividerBase, { DividerBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";

describe("<DividerBase />", () => {
    let props: DividerBaseProps;
    const commonWhiteColor = "#fff";
    const secondaryColor = "#F9AA33";

    it("should exist children with default color", () => {
        render(
            <TestThemeProvider>
                <DividerBase {...props} />
            </TestThemeProvider>
        );
        const muiDivider = screen.getByTestId("DividerBase__root");
        expect(muiDivider).toHaveStyle(`background-color: ${commonWhiteColor};`);
    });

    it("should exist children with hightlighted color", () => {
        props = {
            isHighlighted: true,
        };

        render(
            <TestThemeProvider>
                <DividerBase {...props} />
            </TestThemeProvider>
        );
        const muiDivider = screen.getByTestId("DividerBase__root");
        expect(muiDivider).toHaveStyle(`background-color: ${secondaryColor};`);
    });
});
