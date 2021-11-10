import TextfieldBase, { TexfieldBaseProps } from "../";

import { render, RenderResult } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";

const TestComponent = (props: TexfieldBaseProps) => (
    <TestThemeProvider>
        <TextfieldBase {...props} />
    </TestThemeProvider>
);

// TODO
//@binhTT please refactor this test so that we have one "describe" and many "it"s
//You can have multiple describes, however, the current describes are not meaningful to other people

describe("Structure of <TextfieldBase />", () => {
    const props: TexfieldBaseProps = {
        id: "test",
        label: "Test",
        value: "Value",
    };

    it("should have the label for the input", () => {
        const { getByRole } = render(<TestComponent {...props} />);
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
        wrapper = render(<TestComponent {...propsWithErrorMessage} />);
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
        wrapper = render(<TestComponent {...propsWithNoErrorMessage} />);
        expect(wrapper.container).toMatchSnapshot();
    });
});
