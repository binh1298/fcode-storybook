import GoogleButton, { GoogleButtonProps } from "../";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<ButtonBase />", () => {
    let wrapper: RenderResult;

    const props: GoogleButtonProps = {
        children: "Login with Google",
    };

    beforeEach(() => {
        wrapper = render(<GoogleButton {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Login with Google")).toBeInTheDocument();
    });
});
