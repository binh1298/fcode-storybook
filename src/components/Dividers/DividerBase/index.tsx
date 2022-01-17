import { Divider as MaterialDivider, DividerProps as MaterialDividerProps } from "@mui/material";

export interface DividerBaseProps extends MaterialDividerProps {
    isHighlighted?: boolean;
}

const DividerBase = (props: DividerBaseProps) => {
    const { isHighlighted, ...rest } = props;

    return (
        <MaterialDivider
            sx={{
                borderColor: isHighlighted ? "secondary.main" : "common.white",
            }}
            data-testid="DividerBase__root"
            {...rest}
        />
    );
};

export default DividerBase;
