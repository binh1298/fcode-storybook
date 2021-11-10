import UserProfileBase, { UserProfileBaseProps } from "..";

import { render, screen } from "@testing-library/react";

describe("<UserProfileBase />", () => {
    let props: UserProfileBaseProps;

    it("should exist children with default style", () => {
        render(<UserProfileBase {...props} />);
        expect(screen.getByText("Compose")).toBeInTheDocument();
    });

    it("should exist children with variant left", () => {
        props = {
            variant: "logged-in",
        };
        render(<UserProfileBase {...props} />);
        expect(screen.getByText("Compose")).toBeInTheDocument();
    });

    it("should exist children with variant center", () => {
        props = {
            variant: "logged-out",
        };
        render(<UserProfileBase {...props} />);
        expect(screen.getByText("Sign In")).toBeInTheDocument();
    });
});
