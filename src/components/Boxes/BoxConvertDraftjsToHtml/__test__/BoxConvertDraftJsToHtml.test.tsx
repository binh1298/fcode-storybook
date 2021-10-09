import BoxConvertDraftjsToHtml from "..";

import { render, RenderResult, screen } from "@testing-library/react";

const jsonData = `{"blocks":[{"key":"3b480","text":"abc","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`;

describe("<BoxConvertDraftjsToHtml />", () => {
    let wrapper: RenderResult;
    it("should show text when input data", () => {
        wrapper = render(<BoxConvertDraftjsToHtml input={jsonData} />);
        expect(screen.queryByText("abc")).toBeInTheDocument();
    });

    it("should show text when input data is not right format", () => {
        wrapper = render(<BoxConvertDraftjsToHtml input={"abc"} />);
        expect(screen.queryByText("abc")).toBeInTheDocument();
    });
});
