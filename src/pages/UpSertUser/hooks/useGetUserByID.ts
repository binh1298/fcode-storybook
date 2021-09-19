import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetUserByIdQueryQuery, GetUserByIdQueryQueryVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useGetUserByID = (userId: string) => {
    const queryClient = useQueryClient();
    const result = useQuery(["GetUserByIDQuery", userId], async () => {
        const result = await queryClient.request<
            GetUserByIdQueryQuery,
            GetUserByIdQueryQueryVariables
        >(
            gql`
                query GetUserByIDQuery($userId: uuid!) {
                    users_by_pk(userId: $userId) {
                        avatar
                        email
                        isActive
                        role
                        userId
                        name
                    }
                }
            `,
            { userId: userId }
        );
        return result;
    });
    return result;
};

export default useGetUserByID;
