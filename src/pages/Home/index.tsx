import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay/hooks";
import { PagePropsWithQuery } from "src/common/types";

import ButtonBase from "src/components/Buttons/ButtonBase";

import { HomeUserQuery } from "./__generated__/HomeUserQuery.graphql";

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
    return (
        <header className="App-header">
            <ButtonBase variant="contained" color="primary">
                Welcome FCode Storybook Team. <br /> Run yarn storybook
            </ButtonBase>
            <br />
            <ButtonBase variant="contained" color="primary">
                The first user is {data.users[0].name}
            </ButtonBase>
        </header>
    );
};

export default Home;
