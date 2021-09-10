import GridBase, { GridBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<GridBase />", () => {
    let props: GridBaseProps;

    it("should exist children with primary color", () => {
        props = {
            container: true,
            children: <GridBase item>Test</GridBase>,
        };

        render(<GridBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
