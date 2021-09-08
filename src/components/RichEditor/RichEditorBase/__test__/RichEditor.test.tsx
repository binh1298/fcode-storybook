import { useState } from "react";

import BoxBase from "src/components/Boxes/BoxBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import RichEditorBase, { RichEditorBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

const jsonData = `{"blocks":[{"key":"3b480","text":"abc","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`;
const defalutValue = `{"blocks":[{"key":"fmt8s","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`;
const TestComponent = (props: RichEditorBaseProps) => {
    const [value, setValue] = useState<string>("");
    const getEditorValue = (content: string) => {
        setValue(content);
    };
    const { getValue, ...rest } = props;
    return (
        <BoxBase width={1} display="flex">
            <BoxBase width={1 / 2} p={1} m={1}>
                <RichEditorBase aria-label="draft-input" getValue={getEditorValue} {...rest} />
            </BoxBase>
            <BoxBase width={1 / 2} p={1} m={1}>
                <TypographyBase variant="h6">Content: </TypographyBase>
                <TypographyBase aria-label="test-label" variant="body1">
                    {value}
                </TypographyBase>
            </BoxBase>
        </BoxBase>
    );
};

describe("<RichEditorBase />", () => {
    let wrapper: RenderResult;
    it("should show placeholder", () => {
        wrapper = render(<RichEditorBase placeholder="Placeholer" focus />);
        expect(screen.queryByText("Placeholer")).toBeInTheDocument();
    });

    it("should have min-height is 500 when height=500", () => {
        wrapper = render(<RichEditorBase height={500} placeholder="Placeholer" focus />);
        expect(screen.queryByLabelText("draft-border")).toHaveStyle({
            border: "1px solid",
            padding: "8px",
            boxSizing: "border-box",
            borderRadius: "0px",
            minHeight: "500px",
        });
    });

    it("should have height=auto when height=undefined", () => {
        wrapper = render(<RichEditorBase />);
        expect(screen.queryByLabelText("draft-border")).toHaveStyle({
            border: "1px solid",
            padding: "8px",
            boxSizing: "border-box",
            borderRadius: "0px",
        });
        expect(screen.queryByText("Placeholer")).toBeFalsy();
    });

    it("should show defalut content when init data", () => {
        wrapper = render(<RichEditorBase initContent={jsonData} />);
        expect(screen.queryByText("abc")).toBeInTheDocument();
    });

    it("have data when textarea is changed", () => {
        wrapper = render(<TestComponent initContent={jsonData} focus />);
        expect(screen.getByLabelText("test-label")).toBeInTheDocument();
    });

    it("don't have data first when dont set initContent", () => {
        wrapper = render(<TestComponent />);
        expect(wrapper.getByLabelText("test-label").firstChild).toBeNull();
    });
});
