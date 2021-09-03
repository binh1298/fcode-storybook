import CircularProgressBase, { CircularProgressBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";

describe("<CircularProgressBase />", () => {
    let props: CircularProgressBaseProps;
    const primaryColor = "#344955";

    it("should exist children with default color", () => {
        render(
            <TestThemeProvider>
                <CircularProgressBase {...props} />
            </TestThemeProvider>
        );
        const muiCircularProgress = screen.getByTestId("CircularProgressBase__root");
        expect(muiCircularProgress).toHaveStyle(`color: ${primaryColor};`);
    });
});
