import AvatarBase from "../Avatars/AvatarBase";
import BoxBase from "../Boxs/BoxBase";
import ButtonBase from "../Buttons/ButtonBase";
import DividerBase from "../Dividers/DividerBase";
import TypographyBase from "../Typography/TypographyBase";

export interface IUserProps {
    name: string;
    email: string;
    isActive: boolean;
    avatar?: string;
    onUpdate: () => void;
    onChangeStatus: () => void;
}

export const anonymousAvatarLink =
    "https://cdn1.vectorstock.com/i/thumb-large/22/05/male-profile-picture-vector-1862205.jpg";
const UserCard = (userProps: IUserProps) => {
    return (
        <BoxBase
            shouldHaveBorder={true}
            maxWidth={400}
            minHeight={100}
            boxSizing="border-box"
            p={2}
            display="flex"
            alignItems="center"
            borderRadius={5}
        >
            <BoxBase display="flex" alignItems="center" justifyContent="center" width={3 / 10}>
                <AvatarBase
                    size="large"
                    src={userProps.avatar || anonymousAvatarLink}
                    alt={userProps.email}
                />
            </BoxBase>
            <BoxBase width={7 / 10}>
                <TypographyBase variant="h6">{userProps.name}</TypographyBase>
                <TypographyBase variant="body1">{userProps.email}</TypographyBase>
                <DividerBase variant="fullWidth"></DividerBase>
                <BoxBase pt={2} width={1} display="flex" justifyContent="flex-end">
                    <BoxBase mr={1}>
                        <ButtonBase
                            onClick={userProps.onUpdate}
                            variant="contained"
                            color="primary"
                            size="small"
                        >
                            UPDATE
                        </ButtonBase>
                    </BoxBase>
                    <BoxBase>
                        <ButtonBase
                            onClick={userProps.onChangeStatus}
                            variant="contained"
                            color="secondary"
                            size="small"
                        >
                            {userProps.isActive ? "DEACTIVE" : "ACTIVE"}
                        </ButtonBase>
                    </BoxBase>
                </BoxBase>
            </BoxBase>
        </BoxBase>
    );
};

export default UserCard;
