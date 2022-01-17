import CardActionsBase, { CardActionsBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<CardActionsBase />", () => {
    let props: CardActionsBaseProps;

    it("should exist children with primary color", () => {
        props = {
            children: "Test",
        };

        render(<CardActionsBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
