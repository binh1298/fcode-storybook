import { TextField } from "@material-ui/core";

import AutocompleteBase, { AutocompleteBaseProps } from "../";

import { render, screen } from "@testing-library/react";

const options = [{ title: "Name" }];
describe("<AutocompleteBase />", () => {
    const props: AutocompleteBaseProps = {
        options: options,
        getOptionLabel: (option: any) => option.title,
        renderInput: (params) => <div>Test</div>,
    };

    beforeEach(() => {
        render(<AutocompleteBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
