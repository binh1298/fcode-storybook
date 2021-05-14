import { AlertProps } from "@material-ui/lab";

import useSnackbar from "..";
import SnackbarProvider from "../../../../context/SnackbarContext";
import { AlertBaseProps } from "../../../Alerts/AlertBase";
import ButtonBase from "../../../Buttons/ButtonBase";

import { fireEvent, render, RenderResult, screen } from "@testing-library/react";

const TestComponent = (props: AlertProps) => {
    const showSnackbar = useSnackbar();
    return (
        <ButtonBase variant="contained" color="primary" onClick={() => showSnackbar({ ...props })}>
            Click me
        </ButtonBase>
    );
};
describe("<TestComponent />", () => {
    let wrapper: RenderResult;

    const props: AlertBaseProps = {
        variant: "filled",
        children: "Test",
        severity: "error",
    };

    beforeEach(() => {
        wrapper = render(
            <SnackbarProvider>
                <TestComponent {...props} />
            </SnackbarProvider>
        );
    });

    it("Don't have snackbar in the first time", () => {
        expect(screen.queryByText("Test")).toBeNull();
    });

    describe("useSnackbar", () => {
        it("will show snackbar by 1 on click", () => {
            const button = screen.getByRole("button");
            fireEvent.click(button);
            expect(screen.getByText("Test")).toBeInTheDocument();
        });
    });
});
