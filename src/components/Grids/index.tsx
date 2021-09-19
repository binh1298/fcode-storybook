import { Grid as MaterialGrid, GridProps as MaterialGridProps } from "@material-ui/core";

export interface GridBaseProps extends MaterialGridProps {}

const GridBase = (props: GridBaseProps) => {
    return <MaterialGrid {...props} />;
};

export default GridBase;
