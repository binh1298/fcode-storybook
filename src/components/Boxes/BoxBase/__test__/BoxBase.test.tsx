import BoxBase, { BoxBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";

describe("Structure of <BoxBase />", () => {
    let wrapper: RenderResult;

    const props: BoxBaseProps = {
        children: "Value",
    };

    it("should have children", () => {
        wrapper = render(
            <TestThemeProvider>
                <BoxBase {...props} />
            </TestThemeProvider>
        );
        expect(screen.getByText("Value")).toBeInTheDocument();
    });

    it("color should be onA of backgroundColorA", () => {
        wrapper = render(
            <TestThemeProvider>
                <BoxBase {...props} bgcolor="primary" />
            </TestThemeProvider>
        );
        expect(screen.getByText("Value")).toHaveStyle("color: #fff");
    });

    it("overrideColor should override the color", () => {
        wrapper = render(
            <TestThemeProvider>
                <BoxBase {...props} bgcolor="info" overrideColor="primary" />
            </TestThemeProvider>
        );
        expect(screen.getByText("Value")).toHaveStyle("color: #344955");
    });

    it("backgroundColor is white when bgcolor is none", () => {
        wrapper = render(
            <TestThemeProvider>
                <BoxBase data-testid="box-none" {...props} bgcolor="common" />
            </TestThemeProvider>
        );
        expect(screen.getByTestId("box-none")).toHaveStyle("backgroundColor: #fff");
    });
});
