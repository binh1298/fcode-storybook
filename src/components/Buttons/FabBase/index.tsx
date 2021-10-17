import { Fab as MaterialFab, FabProps as MaterialFabProps } from "@mui/material";

export interface FabBaseProps extends MaterialFabProps {}

const FabBase = (props: FabBaseProps) => {
    return <MaterialFab {...props} />;
};

export default FabBase;
