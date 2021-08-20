import { gql } from "graphql-request";
import { useQuery } from "react-query";
import {
    GetUsersWithPagingQueryQuery,
    GetUsersWithPagingQueryQueryVariables,
} from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useGetUser = (limit: number = 1, offset: number = 0) => {
    const queryClient = useQueryClient();
    const result = useQuery(["GetUsersWithPagingQuery", { limit, offset }], async () => {
        const result = await queryClient.request<
            GetUsersWithPagingQueryQuery,
            GetUsersWithPagingQueryQueryVariables
        >(
            gql`
                query GetUsersWithPagingQuery($offset: Int = 0, $limit: Int = 10) {
                    users(where: { isActive: { _eq: true } }, offset: $offset, limit: $limit) {
                        email
                        name
                        avatar
                        role
                        userId
                    }
                }
            `,
            { limit, offset }
        );
        return result;
    });
    return result;
};

export default useGetUser;
