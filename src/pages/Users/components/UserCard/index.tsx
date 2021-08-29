import { Maybe } from "src/generated/graphql";

import AvatarBase from "../../../../components/Avatars/AvatarBase";
import BoxBase from "../../../../components/Boxs/BoxBase";
import ButtonBase from "../../../../components/Buttons/ButtonBase";
import DividerBase from "../../../../components/Dividers/DividerBase";
import TypographyBase from "../../../../components/Typography/TypographyBase";

export interface IUser {
    name?: string;
    email?: string;
    isActive?: boolean;
    avatar?: Maybe<string>;
    userId?: string;
}
export interface IUserProps extends IUser {
    name: string;
    email: string;
    isActive: boolean;
    avatar?: Maybe<string>;
    onUpdate: (userId: string) => void;
    onChangeStatus: (userId: string) => void;
    userId: string;
}

export const anonymousAvatarLink =
    "https://cdn1.vectorstock.com/i/thumb-large/22/05/male-profile-picture-vector-1862205.jpg";
const UserCard = (userProps: IUserProps) => {
    return (
        <BoxBase
            shouldHaveBorder={true}
            minWidth={350}
            maxWidth={500}
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
                <TypographyBase variant="body2">{userProps.email}</TypographyBase>
                <DividerBase variant="fullWidth"></DividerBase>
                <BoxBase
                    pt={2}
                    data-testid="UserCard__buttons"
                    width={1}
                    display="flex"
                    justifyContent="flex-end"
                >
                    <BoxBase mr={1}>
                        <ButtonBase
                            onClick={() => userProps.onUpdate(userProps.userId)}
                            variant="contained"
                            color="primary"
                            size="small"
                        >
                            UPDATE
                        </ButtonBase>
                    </BoxBase>
                    <BoxBase>
                        <ButtonBase
                            onClick={() => userProps.onChangeStatus(userProps.userId)}
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
