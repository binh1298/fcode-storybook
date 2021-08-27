import React from "react";

import { Modal as MaterialModal, ModalProps as MaterialModalProps } from "@material-ui/core";

export interface ModalBaseProps extends MaterialModalProps {}
const defaultStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
const ModalBase: React.FC<ModalBaseProps> = React.forwardRef((props, ref) => (
    <MaterialModal {...props} ref={ref} style={defaultStyle}>
        <div> {props.children}</div>
    </MaterialModal>
));
export default ModalBase;
