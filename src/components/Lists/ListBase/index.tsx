import { List as MaterialList, ListProps as MaterialListProps } from "@material-ui/core";

import BoxBase from "../../Boxs/BoxBase";

export interface ListBaseProps extends MaterialListProps {
    width?: number;
}

const ListBase = (props: ListBaseProps) => {
    const { width = 260, ...rest } = props;

    return (
        <BoxBase data-testid="ListBase__root" bgcolor="primary" width={width} px={2}>
            <MaterialList {...rest} />
        </BoxBase>
    );
};

export default ListBase;
