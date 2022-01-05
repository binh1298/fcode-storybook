import UserProfile, { UserProfileProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<UserProfile />", () => {
    let props: UserProfileProps;

    const TestComponent = (props: UserProfileProps) => (
        <TestThemeProvider>
            <UserProfile {...props} />
        </TestThemeProvider>
    );

    it("should exist children with default style", () => {
        render(<TestComponent {...props} />);
        const userProfileRoot = screen.getByTestId("UserProfile__root");

        expect(screen.getByText("Compose")).toBeInTheDocument();
        expect(userProfileRoot).toHaveStyle(`
            backgroundColor: ${replyTheme.palette.primary.main}
        `);
    });

    it("should exist children with variant left", () => {
        props = {
            variant: "logged-in",
        };
        render(<TestComponent {...props} />);
        const userProfileRoot = screen.getByTestId("UserProfile__root");

        expect(screen.getByText("Compose")).toBeInTheDocument();
        expect(userProfileRoot).toHaveStyle(`
            backgroundColor: ${replyTheme.palette.primary.main}
        `);
    });

    it("should exist children with variant center", () => {
        props = {
            variant: "logged-out",
        };
        render(<TestComponent {...props} />);
        const userProfileRoot = screen.getByTestId("UserProfile__root");

        expect(screen.getByText("Sign In")).toBeInTheDocument();
        expect(userProfileRoot).toHaveStyle(`
            backgroundColor: ${replyTheme.palette.primary.main}
        `);
    });
});
