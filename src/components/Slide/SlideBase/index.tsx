import React from "react";

import { Slide as MaterialSlide, SlideProps as MaterialSlideProps } from "@mui/material";

export interface SlideBaseProps extends MaterialSlideProps {
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
}

const SlideBase = React.forwardRef<unknown, SlideBaseProps>((props: SlideBaseProps, ref) => {
    return <MaterialSlide ref={ref} {...props} />;
});

export default SlideBase;
