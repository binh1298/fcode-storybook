import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { UsersListQueryQuery, UsersListQueryQueryVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useUsersList = () => {
    const queryClient = useQueryClient();
    const result = useQuery<UsersListQueryQuery, unknown>(["UsersListQuery"], async () => {
        const result = await queryClient.request<
            UsersListQueryQuery,
            UsersListQueryQueryVariables
        >(gql`
            query UsersListQuery {
                users(where: { isActive: { _eq: true } }) {
                    name
                    email
                    role
                    userId
                }
            }
        `);
        return result;
    });
    return result;
};

export default useUsersList;
