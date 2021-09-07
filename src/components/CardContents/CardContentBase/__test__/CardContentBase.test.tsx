import CardContentBase, { CardContentBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<CardContentBase />", () => {
    let props: CardContentBaseProps;

    it("should exist children with primary color", () => {
        props = {
            children: "Test",
        };

        render(<CardContentBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
