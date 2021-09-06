import Content, { IContentProps } from "../";

import { render, screen } from "@testing-library/react";

describe("<Content />", () => {
    const props: IContentProps = {
        email: "test_email",
        name: "test_name",
    };

    beforeEach(() => {
        render(<Content {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("test_email")).toBeInTheDocument();
    });
});
