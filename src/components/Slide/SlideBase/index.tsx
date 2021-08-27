import React from "react";

import { Slide as MaterialSlide, SlideProps as MaterialSlideProps } from "@material-ui/core";

export interface SlideBaseProps extends MaterialSlideProps {}

const SlideBase = React.forwardRef((props: SlideBaseProps, ref) => {
    return <MaterialSlide ref={ref} {...props} mountOnEnter unmountOnExit />;
});

export default SlideBase;
