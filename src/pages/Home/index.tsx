import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay/hooks";
import { PagePropsWithQuery } from "src/common/types";

import ButtonBase from "src/components/Buttons/ButtonBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import { HomeUserQuery } from "./__generated__/HomeUserQuery.graphql";

import { Trans, useTranslation } from "react-i18next";
import LanguageSwitcher from "src/i18n/LanguageSwitcher";

export const HomeUserGraphQL = graphql`
    query HomeUserQuery {
        users {
            userId
            email
            name
            avatar
            role
        }
    }
`;

const Home = (props: PagePropsWithQuery<HomeUserQuery>) => {
    const data = usePreloadedQuery<HomeUserQuery>(HomeUserGraphQL, props.queryReference);
    const { t } = useTranslation(["common", "home"]);
    return (
        <header className="App-header">
            <LanguageSwitcher />
            <ButtonBase variant="contained" color="primary">
                {t("home:description.welcome")}
            </ButtonBase>
            <ButtonBase variant="contained" color="primary">
                {t("home:description.firstUser", { userName: data.users[0]?.name })}
            </ButtonBase>
            <br />
            <TypographyBase>
                <Trans t={t} i18nKey="common:runCommand">
                    <code>{{ command: "yarn storybook" }}</code>
                </Trans>
            </TypographyBase>
        </header>
    );
};

export default Home;
