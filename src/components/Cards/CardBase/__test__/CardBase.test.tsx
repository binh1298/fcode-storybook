import CardBase, { CardBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<CardBase />", () => {
    let props: CardBaseProps;

    it("should exist children with primary color", () => {
        props = {
            children: "Test",
        };

        render(<CardBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
