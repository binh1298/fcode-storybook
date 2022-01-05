import { Maybe, Scalars } from "src/generated/graphql";

import { Card, CardActions, CardContent, Grid } from "@mui/material";
import AvatarBase from "src/components/Avatars/AvatarBase";
import BoxBase from "src/components/Boxes/BoxBase";
import DividerBase from "src/components/Dividers/DividerBase";

import ButtonGroups from "../ButtonsGroup";
import Content from "../Content";

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
    onUpdate: (userId: Scalars["uuid"]) => void;
    onChangeStatus: (userId: Scalars["uuid"]) => void;
    userId: string;
}

export const anonymousAvatarLink =
    "https://cdn1.vectorstock.com/i/thumb-large/22/05/male-profile-picture-vector-1862205.jpg";
const UserCard = (userProps: IUserProps) => {
    return (
        <BoxBase minWidth={400} maxWidth={500} minHeight={100}>
            <Card>
                <Grid container alignItems="center">
                    <Grid container item justify="center" alignItems="center" sm={3}>
                        <AvatarBase
                            size="large"
                            src={userProps.avatar || anonymousAvatarLink}
                            alt={userProps.email}
                        />
                    </Grid>
                    <Grid item sm={7}>
                        <BoxBase>
                            <CardContent>
                                <Content name={userProps.name} email={userProps.email} />
                            </CardContent>
                            <DividerBase variant="fullWidth"></DividerBase>
                            <CardActions>
                                <ButtonGroups
                                    onUpdate={userProps.onUpdate}
                                    onChangeStatus={userProps.onChangeStatus}
                                    userId={userProps.userId}
                                    isActive={userProps.isActive}
                                />
                            </CardActions>
                        </BoxBase>
                    </Grid>
                </Grid>
            </Card>
        </BoxBase>
    );
};

export default UserCard;
