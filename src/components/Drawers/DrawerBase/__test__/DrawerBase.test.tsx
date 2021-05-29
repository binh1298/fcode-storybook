import DrawerBase, { DrawerBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<DrawerBase />", () => {
    const props: DrawerBaseProps = {
        children: <div>Test</div>,
        variant: "permanent",
    };

    beforeEach(() => {
        render(<DrawerBase {...props} />);
    });

    it("should exist children with default style", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
