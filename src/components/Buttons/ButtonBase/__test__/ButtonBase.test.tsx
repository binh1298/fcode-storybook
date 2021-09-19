import ButtonBase, { ButtonBaseProps } from "..";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";

describe("<ButtonBase />", () => {
    let props: ButtonBaseProps;
    const primaryColor = "#344955";
    const secondaryColor = "#F9AA33";

    it("should exist children with primary color", () => {
        props = {
            children: "Test",
        };

        render(
            <TestThemeProvider>
                <div>
                    <ButtonBase {...props} />
                </div>
            </TestThemeProvider>
        );

        const muiButton = screen.getByTestId("ButtonBase__root");
        expect(muiButton).not.toBeDisabled();
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with isLoading true", () => {
        props = {
            children: "Test",
            isLoading: true,
        };

        render(
            <TestThemeProvider>
                <ButtonBase {...props} />
            </TestThemeProvider>
        );

        const muiButton = screen.getByTestId("ButtonBase__root");
        const muiCircularProgress = screen.getByTestId("CircularProgressBase__root");
        const defaultCircularProgressSize = 24;

        expect(muiButton).toBeDisabled();
        expect(muiCircularProgress).toHaveStyle(`
        color: ${primaryColor};
        width: ${defaultCircularProgressSize}px;
        `);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with isLoading true and primary color", () => {
        props = {
            children: "Test",
            color: "primary",
            isLoading: true,
        };

        render(
            <TestThemeProvider>
                <ButtonBase {...props} />
            </TestThemeProvider>
        );

        const muiButton = screen.getByTestId("ButtonBase__root");
        const muiCircularProgress = screen.getByTestId("CircularProgressBase__root");
        const defaultCircularProgressSize = 24;

        expect(muiButton).toBeDisabled();
        expect(muiCircularProgress).toHaveStyle(`
        color: ${secondaryColor};
        width: ${defaultCircularProgressSize}px;
        `);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with isLoading true and circular progress small size", () => {
        props = {
            children: "Test",
            isLoading: true,
            size: "small",
        };

        render(
            <TestThemeProvider>
                <ButtonBase {...props} />
            </TestThemeProvider>
        );

        const muiButton = screen.getByTestId("ButtonBase__root");
        const muiCircularProgress = screen.getByTestId("CircularProgressBase__root");
        const smallCircularProgressSize = 20;

        expect(muiButton).toBeDisabled();
        expect(muiCircularProgress).toHaveStyle(`
        color: ${primaryColor};
        width: ${smallCircularProgressSize}px;
        `);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with isLoading true and circular progress medium size", () => {
        props = {
            children: "Test",
            isLoading: true,
            size: "medium",
        };

        render(
            <TestThemeProvider>
                <ButtonBase {...props} />
            </TestThemeProvider>
        );

        const muiButton = screen.getByTestId("ButtonBase__root");
        const muiCircularProgress = screen.getByTestId("CircularProgressBase__root");
        const mediumCircularProgressSize = 24;

        expect(muiButton).toBeDisabled();
        expect(muiCircularProgress).toHaveStyle(`
        color: ${primaryColor};
        width: ${mediumCircularProgressSize}px;
        `);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should exist children with isLoading true and circular progress large size", () => {
        props = {
            children: "Test",
            isLoading: true,
            size: "large",
        };

        render(
            <TestThemeProvider>
                <ButtonBase {...props} />
            </TestThemeProvider>
        );

        const muiButton = screen.getByTestId("ButtonBase__root");
        const muiCircularProgress = screen.getByTestId("CircularProgressBase__root");
        const largeCircularProgressSize = 28;

        expect(muiButton).toBeDisabled();
        expect(muiCircularProgress).toHaveStyle(`
        color: ${primaryColor};
        width: ${largeCircularProgressSize}px;
        `);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
