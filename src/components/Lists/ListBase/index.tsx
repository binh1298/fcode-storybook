import {
    List as MaterialList,
    ListProps as MaterialListProps,
    Box as MaterialBox,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export interface ListBaseProps extends MaterialListProps {}

const ListBase = (props: ListBaseProps) => {
    const theme = useTheme();

    return (
        <MaterialBox bgcolor={theme.palette.primary.main}>
            <MaterialList {...props} />
        </MaterialBox>
    );
};

export default ListBase;
