import React from "react";

import SwitchBase, { SwitchBaseProps } from "..";

import { render, fireEvent, act } from "@testing-library/react";

describe("<SwitchBase />", () => {
    it("should Checked state changes after change events", () => {
        const { getByRole } = render(<SwitchBase defaultChecked />);

        act(() => {
            getByRole("checkbox").click();
            fireEvent.change(getByRole("checkbox"), { target: { checked: "" } });
        });
    });
});
