import ThematicBreak, { ThematicBreakProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<ThematicBreak />", () => {
    let wrapper: RenderResult;

    const props: ThematicBreakProps = {
        caption: "Test",
    };

    beforeEach(() => {
        wrapper = render(<ThematicBreak {...props} />);
    });

    it("should exist caption", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
