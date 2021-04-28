import TextfieldBase, { TexfieldBaseProps } from "../";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<TextfieldBase />", () => {
    let wrapper: RenderResult;

    const propsForSecondaryColor: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
        color: "secondary",
    };

    const propsForPrimaryColor: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
        color: "primary",
    };

    const propsWithErrorMessage: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
        errorMessage: "error",
        color: "secondary",
    };

    it("should match snapshot", () => {
        wrapper = render(<TextfieldBase {...propsForSecondaryColor} />);
        expect(wrapper.container).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        wrapper = render(<TextfieldBase {...propsForPrimaryColor} />);
        expect(wrapper.container).toMatchSnapshot();
    });

    it("should match snapshot", () => {
        wrapper = render(<TextfieldBase {...propsWithErrorMessage} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});
