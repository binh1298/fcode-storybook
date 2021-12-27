import { useState } from "react";

import { NavLink, withRouter, useLocation } from "react-router-dom";

import { Menu as MenuIcon } from "@mui/icons-material";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import CommentIcon from "@mui/icons-material/Comment";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import Tooltip from "@mui/material/Tooltip";
import AppBarBase from "src/components/AppBars/AppBarBase";
import BoxBase from "src/components/Boxes/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import DrawerTriggerButton from "src/components/Buttons/DrawerTriggerButton";
import CssBaselineBase from "src/components/CssBaselines/CssBaselineBase";
import DividerBase from "src/components/Dividers/DividerBase";
import DrawerBase from "src/components/Drawers/DrawerBase";
import ListItemIconBase from "src/components/ListItemIcons/ListItemIconBase";
import ListItemTextBase from "src/components/ListItemTexts/ListItemTextBase";
import ListItemButtonBase from "src/components/ListItems/ListItemButtonBase";
import ListBase from "src/components/Lists/ListBase";
import ToolbarBase from "src/components/Toolbars/ToolbarBase";
import TypographyBase from "src/components/Typography/TypographyBase";
import UserProfileBase from "src/components/UserProfiles/UserProfileBase";

import LocalStorageUtils from "../utils/LocalStorageUtils";

import LanguageSwitcher from "src/i18n/LanguageSwitcher";

const navigationFeatureItems = [
    { icon: <HomeIcon />, text: "Home", path: "/home" },
    { icon: <PeopleIcon />, text: "User", path: "/users" },
    { icon: <AllInboxIcon />, text: "Post", path: "/posts" },
    { icon: <CommentIcon />, text: "Comment", path: "/comments" },
];
const NavigationBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const fcodeAvatarUrl =
        "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const logout = () => {
        LocalStorageUtils.clear();
        window.location.href = "/";
    };

    return (
        <BoxBase display="flex">
            <CssBaselineBase />
            <AppBarBase open={open} position="static">
                <ToolbarBase>
                    <DrawerTriggerButton onClick={handleDrawerOpen} open={open}>
                        <MenuIcon />
                    </DrawerTriggerButton>
                    <TypographyBase variant="h6" noWrap sx={{ flexGrow: 1 }}>
                        F-Code blog
                    </TypographyBase>
                    <LanguageSwitcher />
                    <Tooltip title="Logout" enterDelay={200}>
                        <ButtonBase color="inherit" onClick={logout}>
                            Logout
                        </ButtonBase>
                    </Tooltip>
                </ToolbarBase>
            </AppBarBase>
            <DrawerBase variant="permanent" open={open}>
                <UserProfileBase
                    variant="logged-out"
                    logoUrl={fcodeAvatarUrl}
                    avatarUrl={fcodeAvatarUrl}
                    onClick={handleDrawerClose}
                />
                <DividerBase />
                <ListBase disablePadding bgcolor="primary">
                    {navigationFeatureItems.map((item, index) => (
                        <NavLink to={item.path} style={{ textDecoration: "none" }} key={index}>
                            <ListItemButtonBase
                                key={index}
                                highlighted={location.pathname === item.path}
                            >
                                <ListItemIconBase>{item.icon}</ListItemIconBase>
                                <ListItemTextBase primary={item.text} />
                            </ListItemButtonBase>
                        </NavLink>
                    ))}
                </ListBase>
            </DrawerBase>
        </BoxBase>
    );
};

export default withRouter(NavigationBar);
