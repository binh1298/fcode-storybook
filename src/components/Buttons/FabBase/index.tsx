import { Fab as MaterialFab, FabProps as MaterialFabProps } from "@material-ui/core";

export interface FabBaseProps extends MaterialFabProps {}

const IconButtonBase = (props: FabBaseProps) => {
    return <MaterialFab {...props} />;
};

export default IconButtonBase;
