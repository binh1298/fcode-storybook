import { List as MaterialList, ListProps as MaterialListProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ListBaseProps extends MaterialListProps {}

const List = styled(MaterialList)<ListBaseProps>(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    paddingLeft: "1rem",
    paddingRight: "1rem",
}));

const ListBase = (props: ListBaseProps) => {
    return <List {...props} />;
};

export default ListBase;
