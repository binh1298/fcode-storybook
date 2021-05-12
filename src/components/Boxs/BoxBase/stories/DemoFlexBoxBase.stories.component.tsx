import React from "react";

import BoxBase, { BoxBaseProps } from "..";
import AvatarBase from "../../../Avatars/AvatarBase";

const source = "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

const ChildrenComponentForFlexStory = () => {
    const data: Array<number> = [1, 2, 3];
    return (
        <React.Fragment>
            {data.map((item) => {
                return (
                    <BoxBase m={1} p={1} key={item}>
                        <AvatarBase size="large" src={source} />
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
