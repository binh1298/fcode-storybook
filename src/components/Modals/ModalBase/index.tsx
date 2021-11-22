import React from "react";

import { Modal as MaterialModal, ModalProps as MaterialModalProps } from "@mui/material";

export interface ModalBaseProps extends MaterialModalProps {}

const ModalBase = (props: MaterialModalProps) => (
    <MaterialModal {...props}>
        <div>{props.children}</div>
    </MaterialModal>
);
export default ModalBase;
