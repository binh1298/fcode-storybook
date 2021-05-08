import {
    ListItemText as MaterialListItemText,
    ListItemTextProps as MaterialListItemTextProps,
    Box as MaterialBox,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export interface ListItemTextBaseProps extends MaterialListItemTextProps {}

const ListItemTextBase = (props: ListItemTextBaseProps) => {
    const theme = useTheme();

    return (
        <MaterialBox color={theme.palette.primary.contrastText}>
            <MaterialListItemText {...props} />
        </MaterialBox>
    );
};

export default ListItemTextBase;
