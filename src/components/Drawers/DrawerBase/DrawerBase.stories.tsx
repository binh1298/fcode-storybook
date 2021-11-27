import { useState } from "react";

import {
    Menu as MenuIcon,
    Inbox as InboxIcon,
    StarBorderRounded as StarIcon,
    SendOutlined as SendIcon,
    DeleteOutline as DeleteIcon,
    ReportOutlined as ReportIcon,
    DraftsRounded as DraftsIcon,
    HelpOutlineRounded as HelpIcon,
    ExitToAppOutlined as LogoutIcon,
} from "@mui/icons-material";
import { ThemeProvider, StyledEngineProvider, useTheme } from "@mui/material";

import DrawerBase, { DrawerBaseProps } from ".";
import replyTheme from "../../../theme/replyTheme";
import AppBarBase from "../../AppBars/AppBarBase";
import BoxBase from "../../Boxes/BoxBase";
import DrawerTriggerButton from "../../Buttons/DrawerTriggerButton";
import CssBaselineBase from "../../CssBaselines/CssBaselineBase";
import DividerBase from "../../Dividers/DividerBase";
import ListItemButtonBase from "../../ListItemButtons/ListItemButtonBase";
import ListItemIconBase from "../../ListItemIcons/ListItemIconBase";
import ListItemTextBase from "../../ListItemTexts/ListItemTextBase";
import ListItemBase from "../../ListItems/ListItemBase";
import ListBase from "../../Lists/ListBase";
import ToolbarBase from "../../Toolbars/ToolbarBase";
import TypographyBase from "../../Typography/TypographyBase";
import UserProfileBase from "../../UserProfiles/UserProfileBase";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Components/DrawerBase",
    subcomponents: {
        DrawerBase,
        AppBarBase,
        BoxBase,
        DrawerTriggerButton,
        CssBaselineBase,
        ListBase,
        ListItemBase,
        ListItemButtonBase,
        ListItemIconBase,
        ListItemTextBase,
        ToolbarBase,
        TypographyBase,
    },
    component: DrawerBase,
    decorators: [
        (Story) => {
            return (
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={replyTheme}>
                        <Story />
                    </ThemeProvider>
                </StyledEngineProvider>
            );
        },
    ],
} as Meta;

const replyLogoUrl = "https://res.cloudinary.com/dq7l8216n/image/upload/v1621347887/Reply_Logo.png";
const fcodeAvatarUrl =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";

const navigationFeatureItems = [
    { icon: <InboxIcon />, text: "Inbox", isHighlighted: true },
    { icon: <StarIcon />, text: "Starred", isHighlighted: false },
    { icon: <SendIcon />, text: "Sent", isHighlighted: false },
    { icon: <DeleteIcon />, text: "Trash", isHighlighted: false },
    { icon: <ReportIcon />, text: "Spam", isHighlighted: false },
    { icon: <DraftsIcon />, text: "Drafts", isHighlighted: false },
];

const navigationSupportItems = [
    { icon: <HelpIcon />, text: "Help", isHighlighted: false },
    { icon: <LogoutIcon />, text: "Logout", isHighlighted: false },
];

export const MiniVariant: Story<DrawerBaseProps> = (args) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <BoxBase display="flex">
            <CssBaselineBase />
            <AppBarBase open={open}>
                <ToolbarBase>
                    <DrawerTriggerButton onClick={handleDrawerOpen} open={open}>
                        <MenuIcon />
                    </DrawerTriggerButton>
                    <TypographyBase variant="h6" noWrap>
                        Mini variant drawer
                    </TypographyBase>
                </ToolbarBase>
            </AppBarBase>
            <DrawerBase {...args} variant="permanent" open={open}>
                <UserProfileBase
                    variant="logged-in"
                    logoUrl={replyLogoUrl}
                    avatarUrl={fcodeAvatarUrl}
                    onClick={handleDrawerClose}
                />
                <DividerBase />
                <ListBase disablePadding>
                    {navigationFeatureItems.map((item, index) => (
                        <ListItemBase key={index} disablePadding>
                            <ListItemButtonBase isHighlighted={item.isHighlighted}>
                                <ListItemIconBase>{item.icon}</ListItemIconBase>
                                <ListItemTextBase primary={item.text} />
                            </ListItemButtonBase>
                        </ListItemBase>
                    ))}
                </ListBase>
                <DividerBase />
                <ListBase disablePadding>
                    {navigationSupportItems.map((item, index) => (
                        <ListItemBase key={index} disablePadding>
                            <ListItemButtonBase key={index} isHighlighted={item.isHighlighted}>
                                <ListItemIconBase>{item.icon}</ListItemIconBase>
                                <ListItemTextBase primary={item.text} />
                            </ListItemButtonBase>
                        </ListItemBase>
                    ))}
                </ListBase>
            </DrawerBase>
            <BoxBase component="main" flexGrow={1} padding={theme.spacing(0.5)}>
                <BoxBase p={3} />
                <TypographyBase paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim
                    praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                    Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis
                    tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio
                    aenean sed adipiscing. Bibendum est ultricies integer quis. Cursus euismod quis
                    viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
                    fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
                    lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac Kien dep trai 20cm 30p.
                </TypographyBase>
                <TypographyBase paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
                    nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque
                    volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus.
                    Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
                    Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa
                    eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                    tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
                    Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
                    sagittis orci a Duc xau trai cu be 20mm 30s.
                </TypographyBase>
            </BoxBase>
        </BoxBase>
    );
};
