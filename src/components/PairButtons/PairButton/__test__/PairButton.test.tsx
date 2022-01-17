import PairButton, { PairButtonProps } from "..";

import { fireEvent, render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<PairButton />", () => {
    let isFirstButtonClicked = false;
    let isSecondButtonClicked = false;
    const props: PairButtonProps = {
        FirstButtonName: "First Button",
        SecondButtonName: "Second Button",
        onClickFirstButton: () => {
            isFirstButtonClicked = true;
        },
        onClickSecondButton: () => {
            isSecondButtonClicked = true;
        },
    };

    const TestComponent = (props: PairButtonProps) => (
        <TestThemeProvider>
            <PairButton {...props} />
        </TestThemeProvider>
    );

    it("should have reply theme and onClick function trigger", () => {
        render(<TestComponent {...props} />);
        const PairButtonRoot = screen.getByTestId("PairButton__root");
        const buttons = PairButtonRoot.querySelectorAll("button");
        const firstButton = buttons[0];
        const secondButton = buttons[1];

        expect(firstButton).toHaveStyle(`
        backgroundColor: ${replyTheme.palette.primary.main};`);
        expect(secondButton).toHaveStyle(`
        backgroundColor: ${replyTheme.palette.secondary.main};`);

        fireEvent.click(firstButton);
        fireEvent.click(secondButton);
        expect(isFirstButtonClicked).toBe(true);
        expect(isSecondButtonClicked).toBe(true);
    });

    it("should have 2 buttons swap background color", () => {
        render(<TestComponent invert {...props} />);
        const PairButtonRoot = screen.getByTestId("PairButton__root");
        const buttons = PairButtonRoot.querySelectorAll("button");
        const firstButton = buttons[0];
        const secondButton = buttons[1];

        expect(firstButton).toHaveStyle(`
        backgroundColor: ${replyTheme.palette.secondary.main};`);
        expect(secondButton).toHaveStyle(`
        backgroundColor: ${replyTheme.palette.primary.main};`);
    });
});
