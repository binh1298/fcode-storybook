import { ThemeProvider } from "@material-ui/core/styles";

import BoxBase, { BoxBaseProps } from "..";
import replyTheme from "../../../../theme/replyTheme";

import { render, RenderResult, screen } from "@testing-library/react";

describe("Structure of <BoxBase />", () => {
    let wrapper: RenderResult;

    const props: BoxBaseProps = {
        children: "Value",
    };

    it("should have children", () => {
        wrapper = render(
            <ThemeProvider theme={replyTheme}>
                <BoxBase {...props} />
            </ThemeProvider>
        );
        expect(screen.getByText("Value")).toBeInTheDocument();
    });

    it("color should be onA of backgroundColorA", () => {
        wrapper = render(
            <ThemeProvider theme={replyTheme}>
                <BoxBase {...props} bgcolor="primary" />
            </ThemeProvider>
        );
        expect(screen.getByText("Value")).toHaveStyle("color: #fff");
    });

    it("overrideColor should override the color", () => {
        wrapper = render(
            <ThemeProvider theme={replyTheme}>
                <BoxBase {...props} bgcolor="info" overrideColor="primary" />
            </ThemeProvider>
        );
        expect(screen.getByText("Value")).toHaveStyle("color: #344955");
    });

    it("backgroundColor is white when bgcolor is none", () => {
        wrapper = render(
            <ThemeProvider theme={replyTheme}>
                <BoxBase data-testid="box-none" {...props} bgcolor="common" />
            </ThemeProvider>
        );
        expect(screen.getByTestId("box-none")).toHaveStyle("backgroundColor: #fff");
    });
});
