import { CSSProperties } from "react";

import {
    ListItem as MaterialListItem,
    ListItemProps as MaterialListItemProps,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import BoxBase from "../../Boxs/BoxBase";

export interface ListItemBaseProps extends MaterialListItemProps {}

const ListItemBase = (props: ListItemBaseProps) => {
    const { button, ...rest } = props;
    const theme = useTheme();

    let listItemBaseStyle: CSSProperties = {
        backgroundColor: theme.palette.primary.main,
    };

    return (
        <BoxBase style={listItemBaseStyle}>
            <MaterialListItem button={button as false} {...rest} />
        </BoxBase>
    );
};

export default ListItemBase;
