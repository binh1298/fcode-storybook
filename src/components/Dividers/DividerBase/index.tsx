import { Divider as MaterialDivider, DividerProps as MaterialDividerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface DividerBaseProps extends MaterialDividerProps {
    isHighlighted?: boolean;
}

const Divider = styled(MaterialDivider, {
    shouldForwardProp: (prop) => prop !== "isHighlighted",
})<DividerBaseProps>(({ theme, isHighlighted }) => ({
    borderColor: isHighlighted ? theme.palette.secondary.main : theme.palette.common.white,
}));

const DividerBase = (props: DividerBaseProps) => {
    const { isHighlighted, ...rest } = props;

    return <Divider isHighlighted={isHighlighted} data-testid="DividerBase__root" {...rest} />;
};

export default DividerBase;
