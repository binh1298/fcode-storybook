import { CircularProgress } from "@material-ui/core";
import { CircularProgressProps } from "@material-ui/core";
import BoxBase from "src/components/Boxs/BoxBase";
import TypographyBase from "src/components/Typography/TypographyBase";

export interface SpinnerBaseProps extends CircularProgressProps {
    size?: number;
    notification?: string;
}

const SpinnerBase = (props: SpinnerBaseProps) => {
    return (
        <BoxBase
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={1}
            minHeight={500}
        >
            <CircularProgress size={60} {...props} />
            <BoxBase mt={2}>
                <TypographyBase variant="h4" color={props.color}>
                    {props.notification}
                </TypographyBase>
            </BoxBase>
        </BoxBase>
    );
};

export default SpinnerBase;
