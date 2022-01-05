import {
    ListItem as MaterialListItem,
    ListItemProps as MaterialListItemProps,
} from "@mui/material";

export interface ListItemBaseProps extends MaterialListItemProps {}

const ListItemBase = (props: ListItemBaseProps) => {
    return <MaterialListItem {...props} />;
};

export default ListItemBase;
