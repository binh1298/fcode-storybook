import BoxBase, { BoxBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("Structure of <BoxBase />", () => {
    let wrapper: RenderResult;

    const props: BoxBaseProps = {
        children: "Value",
    };

    it("should have children", () => {
        wrapper = render(<BoxBase {...props} />);
        expect(screen.getByText("Value")).toBeInTheDocument();
    });

    it("color should be onA of backgroundColorA", () => {
        wrapper = render(<BoxBase {...props} bgcolor="primary" />);
        expect(screen.getByText("Value")).toHaveStyle("color: #fff");
    });
});
