import { List as MaterialList, ListProps as MaterialListProps } from "@material-ui/core";

export interface ListBaseProps extends MaterialListProps {}

const ListBase = (props: ListBaseProps) => {
    return <MaterialList {...props} />;
};

export default ListBase;
