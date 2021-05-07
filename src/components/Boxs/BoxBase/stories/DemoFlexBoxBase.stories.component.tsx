import React from "react";

import BoxBase, { BoxBaseProps } from "..";

const ChildrenComponentForFlexStory = () => {
    const data: Array<{
        id: string;
        content: string;
        color: "primary" | "secondary" | "info" | "error" | "warning" | "success";
    }> = [
        { id: "1", content: "a", color: "primary" },
        { id: "2", content: "b", color: "secondary" },
        { id: "3", content: "c", color: "error" },
    ];
    return (
        <React.Fragment>
            {data.map((item) => {
                return (
                    <BoxBase
                        bgcolor={item.color}
                        key={item.id}
                        width={100}
                        height={100}
                        m={1}
                        p={1}
                        boxSizing="border-box"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
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
