import AvatarBase, { AvatarBaseProps } from "../";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<AvatarBase />", () => {
    let wrapper: RenderResult;

    const props: AvatarBaseProps = {
        children: "Test",
    };

    beforeEach(() => {
        wrapper = render(<AvatarBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        expect(wrapper.container).toMatchSnapshot();
    });
});
