import TextfieldBase, { TexfieldBaseProps } from "../";

import { render, RenderResult } from "@testing-library/react";

describe("Structure of <TextfieldBase />", () => {
    const props: TexfieldBaseProps = {
        id: "test",
        label: "Test",
        value: "Value",
        color: "secondary",
    };

    it("should have the label for the input", () => {
        const { getByRole } = render(<TextfieldBase {...props} />);
        expect(getByRole("textbox", { name: "Test" })).not.toBeUndefined();
    });
});

describe("<TextfieldBase />", () => {
    let wrapper: RenderResult;

    const propsWithSecondaryColor: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
        color: "secondary",
    };

    it("should show #F9AA33 color when color=secondary", () => {
        wrapper = render(<TextfieldBase {...propsWithSecondaryColor} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});

describe("<TextfieldBase />", () => {
    let wrapper: RenderResult;

    const propsWithPrimaryColor: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
        color: "primary",
    };

    it("should show #344955 color when color=primary", () => {
        wrapper = render(<TextfieldBase {...propsWithPrimaryColor} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});

describe("<TextfieldBase />", () => {
    let wrapper: RenderResult;

    const propsWithErrorMessage: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
        color: "primary",
        errorMessage: "error message",
    };

    it("should show #F44336 color when errorMessage is available", () => {
        wrapper = render(<TextfieldBase {...propsWithErrorMessage} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});

describe("<TextfieldBase />", () => {
    let wrapper: RenderResult;

    const propsWithNoErrorMessage: TexfieldBaseProps = {
        label: "Test",
        value: "Value",
        color: "secondary",
        errorMessage: undefined,
    };

    it("should not show #F44336 color when not have any error message", () => {
        wrapper = render(<TextfieldBase {...propsWithNoErrorMessage} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});
