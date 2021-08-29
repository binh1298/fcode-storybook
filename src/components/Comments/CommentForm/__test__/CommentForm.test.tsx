import CommentForm, { CommentFormProps } from "..";

import { render, screen, fireEvent } from "@testing-library/react";

describe("<CommentForm />", () => {
    let props: CommentFormProps;

    it("should exist children with default props", () => {
        let comment = "";
        props = {
            submit: (content) => {
                comment = content;
            },
            validate: (content) => {
                if (content.length > 0) {
                    return true;
                }
                return false;
            },
        };

        render(<CommentForm {...props} />);
        const CommentFormRoot = screen.getByTestId("CommentForm__root");
        const CommentFormTextField = CommentFormRoot.querySelector("textarea");
        const legalValue = "test comment form";
        fireEvent.change(CommentFormTextField!, { target: { value: legalValue } });
        expect(CommentFormTextField?.value).toBe(legalValue);

        const CommentFormButton = CommentFormRoot.querySelector("button");
        fireEvent.click(CommentFormButton!);
        expect(comment).toBe(legalValue);

        const illegalValue = "";
        fireEvent.change(CommentFormTextField!, { target: { value: illegalValue } });
        fireEvent.click(CommentFormButton!);
        expect(comment).toBe(legalValue);
    });

    it("should exist children without validate", () => {
        let comment = "";
        props = {
            submit: (content) => {
                comment = content;
            },
        };

        render(<CommentForm {...props} />);
        const CommentFormRoot = screen.getByTestId("CommentForm__root");
        const CommentFormTextField = CommentFormRoot.querySelector("textarea");

        const value = "test comment form";
        fireEvent.change(CommentFormTextField!, { target: { value: value } });
        expect(CommentFormTextField?.value).toBe(value);

        const CommentFormButton = CommentFormRoot.querySelector("button");
        fireEvent.click(CommentFormButton!);
        expect(comment).toBe(value);
    });

    it("should exist children with disable status", () => {
        const initialValue = "initial value";
        props = {
            isLoading: true,
            value: initialValue,
            submit: () => {},
        };

        render(<CommentForm {...props} />);
        const CommentFormRoot = screen.getByTestId("CommentForm__root");
        const CommentFormTextField = CommentFormRoot.querySelector("textarea");
        expect(CommentFormTextField?.value).toBe(initialValue);
        expect(CommentFormTextField?.disabled).toBe(true);

        const CommentFormButton = CommentFormRoot.querySelector("button");
        expect(CommentFormButton?.disabled).toBe(true);

        expect(screen.getByText("Submit...")).toBeInTheDocument();
    });
});
