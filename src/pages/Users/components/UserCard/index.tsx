import { Users } from "src/generated/graphql";

import AvatarBase from "src/components/Avatars/AvatarBase";
import BoxBase from "src/components/Boxes/BoxBase";
import CardActionsBase from "src/components/CardActions";
import CardContentBase from "src/components/CardContents/CardContentBase";
import CardBase from "src/components/Cards/CardBase";
import DividerBase from "src/components/Dividers/DividerBase";
import GridBase from "src/components/Grids";

import ButtonGroups from "../ButtonsGroup";
import Content from "../Content";

export interface IUserProps {
    name: Users["name"];
    email: Users["email"];
    isActive: Users["isActive"];
    avatar?: Users["avatar"];
    onUpdate: (userId: Users["userId"]) => void;
    onChangeStatus: (userId: Users["userId"]) => void;
    userId: Users["userId"];
}

export const anonymousAvatarLink =
    "https://cdn1.vectorstock.com/i/thumb-large/22/05/male-profile-picture-vector-1862205.jpg";
const UserCard = (userProps: IUserProps) => {
    return (
        <BoxBase minWidth={380} maxWidth={600} minHeight={100}>
            <CardBase>
                <GridBase container alignItems="center">
                    <GridBase container item justifyContent="center" alignItems="center" sm={3}>
                        <AvatarBase
                            size="large"
                            src={userProps.avatar || anonymousAvatarLink}
                            alt={userProps.email}
                        />
                    </GridBase>
                    <GridBase item sm={7}>
                        <BoxBase>
                            <CardContentBase>
                                <Content name={userProps.name} email={userProps.email} />
                            </CardContentBase>
                            <DividerBase variant="fullWidth"></DividerBase>
                            <CardActionsBase>
                                <ButtonGroups
                                    onUpdate={userProps.onUpdate}
                                    onChangeStatus={userProps.onChangeStatus}
                                    userId={userProps.userId}
                                    isActive={userProps.isActive}
                                />
                            </CardActionsBase>
                        </BoxBase>
                    </GridBase>
                </GridBase>
            </CardBase>
        </BoxBase>
    );
};

export default UserCard;
