import React from "react";

import { Icon as MaterialIcon, IconProps as MaterialIconProps } from "@material-ui/core";

export interface IconBaseProps extends MaterialIconProps {
    children?: React.ReactNode;
}

const IconBase = (props: IconBaseProps) => {
    const { children } = props;
    return <MaterialIcon {...props}>{children}</MaterialIcon>;
};

export default IconBase;
