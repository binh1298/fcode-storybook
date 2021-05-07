import React from "react";

import { Icon as MaterialIcon, IconProps as MaterialIconProps } from "@material-ui/core";

export interface IconBaseProps extends MaterialIconProps {
    icon?: React.ReactNode;
}

const IconBase = (props: IconBaseProps) => {
    const { icon } = props;
    return <MaterialIcon {...props}>{icon}</MaterialIcon>;
};

export default IconBase;
