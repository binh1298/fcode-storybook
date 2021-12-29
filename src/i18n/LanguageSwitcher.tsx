import { useState } from "react";

import TranslateIcon from "@mui/icons-material/Translate";
import { MenuItem, Menu } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import BoxBase from "src/components/Boxes/BoxBase";
import DividerBase from "src/components/Dividers/DividerBase";
import IconButtonBase from "src/components/IconButtons/IconButtonBase";

import { LANGUAGES_LABEL } from "./config";

import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const [languageMenu, setLanguageMenu] = useState(null);
    const handleLanguageIconClick = (event: any) => {
        setLanguageMenu(event.currentTarget);
    };
    const handleLanguageMenuClose = (event: any) => {
        const value = event.currentTarget.lang;
        if (!(value === "en" || value === "ja")) return;
        i18n.changeLanguage(value);
        setLanguageMenu(null);
    };

    const { i18n } = useTranslation();
    return (
        <>
            <Tooltip title="Change language" enterDelay={200}>
                <IconButtonBase color="inherit" onClick={handleLanguageIconClick}>
                    <TranslateIcon />
                </IconButtonBase>
            </Tooltip>
            <Menu
                id="language-menu"
                anchorEl={languageMenu}
                open={Boolean(languageMenu)}
                onClose={handleLanguageMenuClose}
                PaperProps={{
                    variant: "outlined",
                    elevation: 0,
                    sx: {
                        mt: 1,
                        minWidth: 180,
                        backgroundImage: "none",
                    },
                }}
            >
                {LANGUAGES_LABEL.map((item, index) => (
                    <MenuItem
                        key={index}
                        value={item.code}
                        onClick={handleLanguageMenuClose}
                        lang={item.code}
                        selected={i18n.language === item.code}
                    >
                        {item.text}
                    </MenuItem>
                ))}
                <BoxBase sx={{ my: 1 }}>
                    <DividerBase />
                </BoxBase>
            </Menu>
        </>
    );
};

export default LanguageSwitcher;
