import React from "react";

import { Modal as MaterialModal, ModalProps as MaterialModalProps } from "@material-ui/core";

export interface ModalBaseProps extends MaterialModalProps {}

const ModalBase = (props: MaterialModalProps) => (
    <MaterialModal {...props}>
        <div>{props.children}</div>
    </MaterialModal>
);
export default ModalBase;
