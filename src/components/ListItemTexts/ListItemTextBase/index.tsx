import {
    ListItemText as MaterialListItemText,
    ListItemTextProps as MaterialListItemTextProps,
    Box as MaterialBox,
} from "@material-ui/core";

export interface ListItemTextBaseProps extends MaterialListItemTextProps {}

const ListItemTextBase = (props: ListItemTextBaseProps) => {
    return (
        <MaterialBox color="primary.contrastText">
            <MaterialListItemText {...props} />
        </MaterialBox>
    );
};

export default ListItemTextBase;
