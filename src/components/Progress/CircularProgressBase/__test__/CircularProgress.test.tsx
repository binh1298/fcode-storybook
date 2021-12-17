import CircularProgressBase, { CircularProgressBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<CircularProgressBase />", () => {
    let props: CircularProgressBaseProps;

    beforeEach(() => {
        render(
            <TestThemeProvider>
                <CircularProgressBase {...props} />
            </TestThemeProvider>
        );
    });

    it("should exist children with default color", () => {
        const CircularProgressBaseRoot = screen.getByTestId("CircularProgressBase__root");
        expect(CircularProgressBaseRoot).toHaveStyle(`color: ${replyTheme.palette.primary.main};`);
    });
});
