import BoxBase from "src/components/Boxes/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";

export interface IActionProps {
    userId: string;
    isActive: boolean;
    onUpdate: (userId: string) => void;
    onChangeStatus: (userId: string) => void;
}

const ButtonGroups = (props: IActionProps) => {
    return (
        <BoxBase data-testid="UserCard__buttons">
            <ButtonBase
                onClick={() => props.onUpdate(props.userId)}
                variant="contained"
                color="primary"
                size="small"
            >
                UPDATE
            </ButtonBase>
            <ButtonBase
                onClick={() => props.onChangeStatus(props.userId)}
                variant="contained"
                color="secondary"
                size="small"
            >
                {props.isActive ? "DEACTIVE" : "ACTIVE"}
            </ButtonBase>
        </BoxBase>
    );
};

export default ButtonGroups;
