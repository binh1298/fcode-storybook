import { List as MaterialList, ListProps as MaterialListProps } from "@mui/material";

import BoxBase from "../../Boxes/BoxBase";

export interface ListBaseProps extends MaterialListProps {
    bgcolor?: "primary" | "secondary" | "info" | "error" | "warning" | "success" | "common";
}

const ListBase = (props: ListBaseProps) => {
    const { disablePadding, bgcolor } = props;

    return (
        <BoxBase bgcolor={bgcolor} px={disablePadding ? 0 : 2}>
            <MaterialList {...props} />
        </BoxBase>
    );
};

export default ListBase;
