import CardHeaderBase, { CardHeaderBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<CardHeaderBase />", () => {
    let props: CardHeaderBaseProps;

    it("should exist children with primary color", () => {
        props = {
            title: "Test",
        };

        render(<CardHeaderBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
