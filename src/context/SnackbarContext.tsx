import React, { createContext, useState } from "react";

import AlertBase, { AlertBaseProps } from "../components/Alerts/AlertBase";
import SnackbarBase from "../components/SnackBars/SnackbarBase";
import BoxBase from "src/components/Boxes/BoxBase";

type showSnackbar = (newAlert: AlertBaseProps) => void;
export const SnackbarContext = createContext<showSnackbar>(({}) => {});

const SnackbarProvider: React.FC = ({ children }) => {
    const [alert, setAlert] = useState<AlertBaseProps>({});
    const [open, setOpen] = useState<boolean>(false);

    const showSnackbar = (newAlert: AlertBaseProps) => {
        setAlert(newAlert);
        setOpen(true);
    };

    const handleClose = (e?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
        if (!open) {
            setAlert({});
        }
    };

    return (
        <SnackbarContext.Provider value={showSnackbar}>
            {children}
            <SnackbarBase open={open} onClose={handleClose} autoHideDuration={4000}>
                <BoxBase display="flex" alignItems="center">
                    <AlertBase variant="filled" {...alert} onClose={handleClose} />
                </BoxBase>
            </SnackbarBase>
        </SnackbarContext.Provider>
    );
};

export default SnackbarProvider;
