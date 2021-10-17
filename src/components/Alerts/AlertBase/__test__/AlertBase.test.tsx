import AlertBase, { AlertBaseProps } from "../";

import { render, screen } from "@testing-library/react";

describe("<AlertBase />", () => {
    const props: AlertBaseProps = {
        children: "Test",
        severity: "success",
        variant: "filled",
    };

    beforeEach(() => {
        render(<AlertBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
