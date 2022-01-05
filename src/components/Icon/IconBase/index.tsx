import React from "react";

import { Icon as MaterialIcon, IconProps as MaterialIconProps } from "@mui/material";

export interface IconBaseProps extends MaterialIconProps {
    icon?: React.ReactNode;
}

const IconBase = (props: IconBaseProps) => {
    const { icon } = props;
    return <MaterialIcon {...props}>{icon}</MaterialIcon>;
};

export default IconBase;
