import {
    ListItemText as MaterialListItemText,
    ListItemTextProps as MaterialListItemTextProps,
} from "@mui/material";

export interface ListItemTextBaseProps extends MaterialListItemTextProps {}

const ListItemTextBase = (props: ListItemTextBaseProps) => {
    return <MaterialListItemText {...props} />;
};

export default ListItemTextBase;
