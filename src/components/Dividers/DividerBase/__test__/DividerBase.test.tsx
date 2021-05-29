import DividerBase from "..";

import { render } from "@testing-library/react";

describe("<DividerBase />", () => {
    it("should exist with default style", () => {
        const { container } = render(<DividerBase />);
        expect(container.querySelector("hr")).toBeDefined();
    });
});
