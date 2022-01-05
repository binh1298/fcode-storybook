import TyphographyBase, { TypographyBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<TypographyBase />", () => {
    const props: TypographyBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        render(<TyphographyBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
