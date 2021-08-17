import {
    ListItemText as MaterialListItemText,
    ListItemTextProps as MaterialListItemTextProps,
} from "@material-ui/core";

export interface ListItemTextBaseProps extends MaterialListItemTextProps {}

const ListItemTextBase = (props: ListItemTextBaseProps) => {
    return <MaterialListItemText {...props} />;
};

export default ListItemTextBase;
