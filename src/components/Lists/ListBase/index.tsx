import {
    List as MaterialList,
    ListProps as MaterialListProps,
    Box as MaterialBox,
} from "@material-ui/core";

export interface ListBaseProps extends MaterialListProps {}

const ListBase = (props: ListBaseProps) => {
    return (
        <MaterialBox color="secondary.main" bgcolor="primary.main">
            <MaterialList {...props} />
        </MaterialBox>
    );
};

export default ListBase;
