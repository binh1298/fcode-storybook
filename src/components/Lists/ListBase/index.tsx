import {
    List as MaterialList,
    ListProps as MaterialListProps,
    Box as MaterialBox,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export interface ListBaseProps extends MaterialListProps {
    width?: number;
}

const ListBase = (props: ListBaseProps) => {
    const theme = useTheme();
    const { width, ...rest } = props;
    let listBaseWidth: string | number;
    if (width) {
        listBaseWidth = width;
    } else {
        listBaseWidth = "auto";
    }

    return (
        <MaterialBox width={listBaseWidth} bgcolor={theme.palette.primary.main}>
            <MaterialList {...rest} />
        </MaterialBox>
    );
};

export default ListBase;
