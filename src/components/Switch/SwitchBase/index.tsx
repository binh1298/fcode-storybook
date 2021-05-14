import { Switch as MaterialSwitch, SwitchProps as MaterialSwitchProps } from "@material-ui/core";

export interface SwitchBaseProps extends MaterialSwitchProps {}

const SwitchBase = (props: SwitchBaseProps) => {
    return <MaterialSwitch {...props} />;
};

export default SwitchBase;
