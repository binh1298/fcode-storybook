import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay/hooks";
import { PagePropsWithQuery } from "src/common/types";

import ButtonBase from "src/components/Buttons/ButtonBase";

import { HomeUserQuery } from "./__generated__/HomeUserQuery.graphql";

import { useTranslation } from "react-i18next";
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

    const { t } = useTranslation(["home"]);

    return (
        <header className="App-header">
            <ButtonBase variant="contained" color="primary">
                {t("home:description.welcome")}
            </ButtonBase>
            <LanguageSwitcher />
            <br />
            <ButtonBase variant="contained" color="primary">
                {t("home:description.firstUser")} {data.users[0]?.name}
            </ButtonBase>
        </header>
    );
};

export default Home;
