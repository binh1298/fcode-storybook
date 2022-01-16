import { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";

import { ArrowLeft as ArrowLeftIcon } from "@mui/icons-material";
import { Menu as MenuIcon } from "@mui/icons-material";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import Tooltip from "@mui/material/Tooltip";
import AppBarBase from "src/components/AppBars/AppBarBase";
import AvatarBase from "src/components/Avatars/AvatarBase";
import BoxBase from "src/components/Boxes/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import CssBaselineBase from "src/components/CssBaselines/CssBaselineBase";
import DividerBase from "src/components/Dividers/DividerBase";
import DrawerBase from "src/components/Drawers/DrawerBase";
import DrawerTriggerButton from "src/components/IconButtons/DrawerTriggerButton";
import IconButtonBase from "src/components/IconButtons/IconButtonBase";
import ListItemButtonBase from "src/components/ListItemButtons/ListItemButtonBase";
import ListItemIconBase from "src/components/ListItemIcons/ListItemIconBase";
import ListItemTextBase from "src/components/ListItemTexts/ListItemTextBase";
import ListBase from "src/components/Lists/ListBase";
import ToolbarBase from "src/components/Toolbars/ToolbarBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "src/i18n/LanguageSwitcher";
import LocalStorageUtils from "src/utils/LocalStorageUtils";

const NavigationMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation("home");
    const navigationFeatureItems = [
        { icon: <HomeIcon />, text: t("navigationMenu.home"), path: "/" },
        { icon: <PeopleIcon />, text: t("navigationMenu.user"), path: "/users" },
        { icon: <AllInboxIcon />, text: t("navigationMenu.post"), path: "/posts" },
    ];
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    /* eslint-disable no-console */
    console.log("rendered");
    /* eslint-enable no-console */
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
            <AppBarBase open={open} position="fixed">
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
                            {t("navigationMenu.logout")}
                        </ButtonBase>
                    </Tooltip>
                </ToolbarBase>
            </AppBarBase>
            <DrawerBase variant="permanent" open={open}>
                <BoxBase
                    display="flex"
                    bgcolor="primary"
                    paddingTop={2}
                    paddingBottom={1}
                    paddingLeft={5}
                >
                    <IconButtonBase color="inherit" edge="start" onClick={handleDrawerClose}>
                        <ArrowLeftIcon />
                    </IconButtonBase>
                    <AvatarBase variant="square" src={fcodeAvatarUrl} />
                    <BoxBase bgcolor="primary" px={1}>
                        <TypographyBase variant="h6">F-Code</TypographyBase>
                    </BoxBase>
                </BoxBase>
                <DividerBase />
                <ListBase disablePadding>
                    {navigationFeatureItems.map((item, index) => (
                        <NavLink to={item.path} style={{ textDecoration: "none" }} key={index}>
                            <ListItemButtonBase
                                key={index}
                                isHighlighted={location.pathname === item.path}
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

export default NavigationMenu;
