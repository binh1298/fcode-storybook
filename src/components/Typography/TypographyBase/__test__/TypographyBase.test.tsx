import TyphographyBase, { TypographyBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<TypographyBase />", () => {
    let wrapper: RenderResult;

    const props: TypographyBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        wrapper = render(<TyphographyBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        expect(wrapper.container).toMatchSnapshot();
    });
});
