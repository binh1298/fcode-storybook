import {
    IconButton as MaterialIconButton,
    IconButtonProps as MaterialIconButtonProps,
} from "@material-ui/core";

export interface IconButtonBaseProps extends MaterialIconButtonProps {}

const IconButtonBase = (props: IconButtonBaseProps) => {
    return <MaterialIconButton data-testid="IconButtonBase__root" {...props} />;
};

export default IconButtonBase;
