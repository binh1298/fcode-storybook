import { useState } from "react";

import BoxBase from "src/components/Boxs/BoxBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import RichEditorBase, { RichEditorBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

const jsonData = `{"blocks":[{"key":"3b480","text":"abc","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`;
const TestComponent = (props: RichEditorBaseProps) => {
    const [value, setValue] = useState<string>("");
    const getEditorValue = (content: string) => {
        setValue(content);
    };
    const { getValue, ...rest } = props;
    return (
        <BoxBase width={1} display="flex">
            <BoxBase width={1 / 2} p={1} m={1}>
                <RichEditorBase aria-label="cost-input" getValue={getEditorValue} {...rest} />
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
        wrapper = render(<RichEditorBase placeholder="Placeholer" />);
        expect(screen.queryByText("Placeholer")).toBeInTheDocument();
    });

    it("should have height is 500 when height is 499.99 (-m,p,b)", () => {
        wrapper = render(<RichEditorBase height={500} placeholder="Placeholer" />);
        expect(screen.queryByLabelText("rdw-editor")).toHaveStyle("height:499.99");
    });

    it("should not show when loading", () => {
        wrapper = render(<RichEditorBase placeholder="Placeholder" loading />);
        expect(screen.queryByText("Is loading")).toBeInTheDocument();
    });

    it('should show defalut content when type="json" and data is json', () => {
        wrapper = render(<RichEditorBase initContent={jsonData} />);
        expect(screen.queryByText("abc")).toBeInTheDocument();
    });

    it("should show value with import json and export html", () => {
        wrapper = render(<TestComponent initContent={jsonData} />);
        expect(screen.getByLabelText("test-label")).toBeInTheDocument();
    });
});
