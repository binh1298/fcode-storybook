import { List as MaterialList, ListProps as MaterialListProps } from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface ListBaseProps extends MaterialListProps {}

const ListBase = (props: ListBaseProps) => {
    const { ...rest } = props;

    return (
        <BoxBase bgcolor="primary" px={2}>
            <MaterialList {...rest} />
        </BoxBase>
    );
};

export default ListBase;
