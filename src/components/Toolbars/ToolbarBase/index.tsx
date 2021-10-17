import { Toolbar as MaterialToolbar, ToolbarProps as MaterialToolbarProps } from "@mui/material";

export interface ToolbarBaseProps extends MaterialToolbarProps {}

const ToolbarBase = (props: ToolbarBaseProps) => {
    return <MaterialToolbar {...props} />;
};

export default ToolbarBase;
