import TextfieldBase, { TexfieldBaseProps } from "../";

import { render, RenderResult } from "@testing-library/react";

describe("Structure of <TextfieldBase />", () => {
    const props: TexfieldBaseProps = {
        id: "test",
        label: "Test",
        value: "Value",
    };

    it("should have the label for the input", () => {
        const { getByRole } = render(<TextfieldBase {...props} />);
        expect(getByRole("textbox", { name: "Test" })).not.toBeUndefined();
    });
});

describe("<TextfieldBase />", () => {
    let wrapper: RenderResult;

    const propsWithErrorMessage: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
        errorMessage: "error message",
    };

    it("should show error color when errorMessage is available", () => {
        wrapper = render(<TextfieldBase {...propsWithErrorMessage} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});

describe("<TextfieldBase />", () => {
    let wrapper: RenderResult;

    const propsWithNoErrorMessage: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
        errorMessage: undefined,
    };

    it("should not show error color when not have any error message", () => {
        wrapper = render(<TextfieldBase {...propsWithNoErrorMessage} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});
