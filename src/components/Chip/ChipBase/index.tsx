import { Chip as MaterialChip, ChipProps as MaterialChipProps } from "@material-ui/core";

export interface ChipBaseProps extends MaterialChipProps {}

const ChipBase = (props: ChipBaseProps) => {
    return <MaterialChip {...props} />;
};

export default ChipBase;
