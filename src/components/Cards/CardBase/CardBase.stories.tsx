import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import AvatarBase from "src/components/Avatars/AvatarBase";
import BoxBase from "src/components/Boxes/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import CardActionsBase from "src/components/CardActions";
import CardContentBase from "src/components/CardContents/CardContentBase";
import CardHeaderBase from "src/components/CardHeaders/CardHeaderBase";
import IconButtonBase from "src/components/IconButtons/IconButtonBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import CardBase, { CardBaseProps } from ".";

import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

export default {
    title: "Components/CardBase",
    component: CardBase,
    subcomponents: {
        CardHeaderBase,
        AvatarBase,
        BoxBase,
        CardContentBase,
        CardActionsBase,
        TypographyBase,
        IconButtonBase,
        ButtonBase,
    },
};
const avatarLink = "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

export const BasicCard: Story<CardBaseProps> = (args) => (
    <BoxBase width={360}>
        <CardBase {...args}>
            <CardHeaderBase
                avatar={<AvatarBase data-testid="CommentItem__avatar" src={avatarLink} />}
                title="F-Code"
                subheader={new Date().toLocaleString()}
                action={
                    <IconButtonBase onClick={action("show-options")}>
                        <MoreVertIcon />
                    </IconButtonBase>
                }
            />
            <CardContentBase>
                <TypographyBase variant="body1">
                    F-Code is a academic club of FPT university of Ho Chi Minh city that provides
                    exclusive technology environment for students to develop not only hard skills
                    about web development, mobile development, artificial intelligence, design,
                    etc... But also soft skills such as leadership, management, teamwork,
                    communication and so on.
                </TypographyBase>
            </CardContentBase>
            <CardActionsBase>
                <ButtonBase size="small">Learn More</ButtonBase>
            </CardActionsBase>
        </CardBase>
    </BoxBase>
);
