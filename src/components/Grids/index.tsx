import { Grid as MaterialGrid, GridProps as MaterialGridProps } from "@mui/material";

export interface GridBaseProps extends MaterialGridProps {}

const GridBase = (props: GridBaseProps) => {
    return <MaterialGrid {...props} />;
};

export default GridBase;
