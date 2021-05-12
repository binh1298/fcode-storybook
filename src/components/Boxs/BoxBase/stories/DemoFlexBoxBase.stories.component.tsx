import React from "react";

import BoxBase, { BoxBaseProps } from "..";

interface ChildrenForDemo {
    id: string;
    content: string;
}
const ChildrenComponentForFlexStory = () => {
    const data: Array<ChildrenForDemo> = [
        { id: "1", content: "Item 1" },
        { id: "2", content: "Item 2" },
        { id: "3", content: "Item 3" },
    ];
    return (
        <React.Fragment>
            {data.map((item) => {
                return (
                    <BoxBase
                        bgcolor="primary"
                        display="flex"
                        key={item.id}
                        alignItems="center"
                        justifyContent="center"
                        width={100}
                        height={100}
                        m={1}
                        p={1}
                        boxSizing="border-box"
                    >
                        {item.content}
                    </BoxBase>
                );
            })}
        </React.Fragment>
    );
};

const DemoFlexBoxBase = (props: BoxBaseProps) => {
    return (
        <BoxBase {...props}>
            <ChildrenComponentForFlexStory />
        </BoxBase>
    );
};

export default DemoFlexBoxBase;
