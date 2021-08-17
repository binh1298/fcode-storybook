import NormalTextField, { NormalTextFieldProps } from "../";

import { render, RenderResult } from "@testing-library/react";

describe("Structure of <TextfieldBase />", () => {
    const props: NormalTextFieldProps = {
        id: "test",
        label: "Test",
        value: "Value",
    };

    it("should have the label for the input", () => {
        const { getByRole } = render(<NormalTextField {...props} />);
        expect(getByRole("textbox", { name: "Test" })).not.toBeUndefined();
    });
});

describe("<NormalTextField />", () => {
    let wrapper: RenderResult;

    const propsWithErrorMessage: NormalTextFieldProps = {
        label: "Test",
        value: "Value",
        errorMessage: "error message",
    };

    it("should show error color when errorMessage is available", () => {
        wrapper = render(<NormalTextField {...propsWithErrorMessage} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});

describe("<NormalTextField />", () => {
    let wrapper: RenderResult;

    const propsWithNoErrorMessage: NormalTextFieldProps = {
        label: "Test",
        value: "Value",
        errorMessage: undefined,
    };

    it("should not show error color when not have any error message", () => {
        wrapper = render(<NormalTextField {...propsWithNoErrorMessage} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});
