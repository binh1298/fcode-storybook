import { MouseEventHandler } from "react";

import ButtonGroupBase from "src/components/ButtonGroups/ButtonGroupBase";
import ButtonBase from "src/components/Buttons/ButtonBase";

export interface PairButtonProps {
    FirstButtonName: string;
    SecondButtonName: string;
    onClickFirstButton: MouseEventHandler<HTMLButtonElement>;
    onClickSecondButton: MouseEventHandler<HTMLButtonElement>;
    invert?: boolean;
}

const PairButton = (props: PairButtonProps) => {
    const {
        FirstButtonName,
        SecondButtonName,
        onClickFirstButton,
        onClickSecondButton,
        invert,
    } = props;

    return (
        <ButtonGroupBase data-testid="PairButton__root">
            <ButtonBase
                onClick={onClickFirstButton}
                variant="contained"
                color={invert ? "secondary" : "primary"}
                size="small"
            >
                {FirstButtonName}
            </ButtonBase>
            <ButtonBase
                onClick={onClickSecondButton}
                variant="contained"
                color={invert ? "primary" : "secondary"}
                size="small"
            >
                {SecondButtonName}
            </ButtonBase>
        </ButtonGroupBase>
    );
};

export default PairButton;
