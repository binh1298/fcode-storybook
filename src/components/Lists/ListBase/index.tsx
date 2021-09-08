import { List as MaterialList, ListProps as MaterialListProps } from "@material-ui/core";

import BoxBase from "../../Boxes/BoxBase";

export interface ListBaseProps extends MaterialListProps {}

const ListBase = (props: ListBaseProps) => {
    const { disablePadding } = props;

    return (
        <BoxBase bgcolor="primary" px={disablePadding ? 0 : 2}>
            <MaterialList {...props} />
        </BoxBase>
    );
};

export default ListBase;
