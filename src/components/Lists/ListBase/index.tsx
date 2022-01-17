import { List as MaterialList, ListProps as MaterialListProps } from "@mui/material";

export interface ListBaseProps extends MaterialListProps {}

const ListBase = (props: ListBaseProps) => {
    return (
        <MaterialList
            sx={{
                backgroundColor: "primary.main",
                paddingLeft: "1rem",
                paddingRight: "1rem",
            }}
            {...props}
        />
    );
};

export default ListBase;
