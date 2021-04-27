import TextfieldBase, { TexfieldBaseProps } from "../";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<TextfieldBase />", () => {
    let wrapper: RenderResult;

    const props: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
    };

    beforeEach(() => {
        wrapper = render(<TextfieldBase {...props} />);
    });

    it("should exist value", () => {
        expect(screen.getByDisplayValue("Value")).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        expect(wrapper.container).toMatchSnapshot();
    });
});
