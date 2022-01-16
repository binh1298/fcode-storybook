import ButtonGroupBase, { ButtonGroupBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<ButtonGroupBase />", () => {
    let props: ButtonGroupBaseProps;

    it("should exist children with primary color", () => {
        props = {
            variant: "contained",
            children: "Test",
        };

        render(<ButtonGroupBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
