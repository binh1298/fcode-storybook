import React from "react";

import TypographyBase from "src/components/Typography/TypographyBase";

export interface IContentProps {
    email: string;
    name: string;
}

const Content = (props: IContentProps) => {
    return (
        <React.Fragment>
            <TypographyBase variant="h6">{props.name}</TypographyBase>
            <TypographyBase variant="body2">{props.email}</TypographyBase>
        </React.Fragment>
    );
};

export default Content;
