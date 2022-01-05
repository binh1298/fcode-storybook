import { MenuItem, Select } from "@mui/material";

import { useTranslation } from "react-i18next";

const languages: {
    en: { nativeName: string };
    ja: { nativeName: string };
} = {
    en: { nativeName: "English" },
    ja: { nativeName: "Japanese" },
};

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    return (
        <Select
            labelId="label"
            id="select"
            onChange={(event) => {
                const value = event.target.value;
                if (!(value === "en" || value === "ja")) return;

                i18n.changeLanguage(value);
            }}
            value={i18n.language}
        >
            <MenuItem value={"en"}>{languages["en"].nativeName}</MenuItem>
            <MenuItem value={"ja"}>{languages["ja"].nativeName}</MenuItem>
        </Select>
    );
};

export default LanguageSwitcher;
