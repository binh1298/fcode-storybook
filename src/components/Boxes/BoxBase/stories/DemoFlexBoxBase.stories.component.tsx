import React, { useState } from "react";

import BoxBase, { BoxBaseProps } from "..";
import AvatarBase from "../../../Avatars/AvatarBase";
import ButtonBase from "../../../Buttons/ButtonBase";
import TypographyBase from "../../../Typography/TypographyBase";

const source = "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

type DemoType = "typography" | "avatar";

const ChildrenComponentForFlexStory = ({ type }: { type: DemoType }) => {
    const data: Array<number> = [1, 2, 3];
    return (
        <React.Fragment>
            {data.map((item) => {
                return (
                    <BoxBase m={1} p={1} key={item}>
                        {type === "avatar" ? (
                            <AvatarBase size="large" src={source} />
                        ) : (
                            <TypographyBase variant="h3">Item {item}</TypographyBase>
                        )}
                    </BoxBase>
                );
            })}
        </React.Fragment>
    );
};

const DemoFlexBoxBase = (props: BoxBaseProps) => {
    const [type, setType] = useState<DemoType>("avatar");
    const changeTypeDemoHandler = () => {
        type === "avatar" ? setType("typography") : setType("avatar");
    };
    return (
        <BoxBase>
            <BoxBase {...props}>
                <ChildrenComponentForFlexStory type={type} />
            </BoxBase>
            <ButtonBase variant="contained" color="primary" onClick={changeTypeDemoHandler}>
                Demo by {type === "avatar" ? "typography" : "avatar"}
            </ButtonBase>
        </BoxBase>
    );
};

export default DemoFlexBoxBase;
