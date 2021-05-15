import {
    ListItem as MaterialListItem,
    ListItemProps as MaterialListItemProps,
} from "@material-ui/core";

export interface ListItemBaseProps extends MaterialListItemProps {
    button?: false | undefined;
}

const ListItemBase = (props: ListItemBaseProps) => {
    return <MaterialListItem {...props} />;
};

export default ListItemBase;
