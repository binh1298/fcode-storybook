import {
    Toolbar as MaterialToolbar,
    ToolbarProps as MaterialToolbarProps,
} from "@material-ui/core";

export interface ToolbarBaseProps extends MaterialToolbarProps {}

const ToolbarBase = (props: ToolbarBaseProps) => {
    return <MaterialToolbar {...props} />;
};

export default ToolbarBase;
