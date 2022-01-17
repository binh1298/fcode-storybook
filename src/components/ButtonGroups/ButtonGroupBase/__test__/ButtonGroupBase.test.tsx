import ButtonGroupBase, { ButtonGroupBaseProps } from "..";
import ButtonBase from "../../../Buttons/ButtonBase";

import { render, screen } from "@testing-library/react";

describe("<ButtonGroupBase />", () => {
    let props: ButtonGroupBaseProps;

    it("should exist children with primary color", () => {
        props = {
            variant: "contained",
            children: (
                <ButtonBase variant="outlined" color="primary">
                    Test
                </ButtonBase>
            ),
        };

        render(<ButtonGroupBase {...props} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
