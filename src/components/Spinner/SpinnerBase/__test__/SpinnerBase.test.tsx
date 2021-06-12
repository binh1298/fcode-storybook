import SpinnerBase, { SpinnerBaseProps } from "../";

import { render, RenderResult, screen } from "@testing-library/react";

describe("Structure of <TextfieldBase />", () => {
    let wrapper: RenderResult;

    const props: SpinnerBaseProps = {
        id: "test",
    };

    it("should have the notification when set notification is not undefined", () => {
        wrapper = render(<SpinnerBase {...props} notification="Loading" />);
        expect(screen.getByText("Loading")).toBeInTheDocument();
    });
});
