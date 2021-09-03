import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetUserByIdQueryQuery, GetUserByIdQueryQueryVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useGetUserByID = (userId: string) => {
    const queryClient = useQueryClient();
    const result = useQuery(["GetUserByIDQuery", { _eq: userId }], async () => {
        const result = await queryClient.request<
            GetUserByIdQueryQuery,
            GetUserByIdQueryQueryVariables
        >(
            gql`
                query GetUserByIDQuery($_eq: uuid!) {
                    users(where: { userId: { _eq: $_eq } }) {
                        userId
                        role
                        name
                        isActive
                        email
                        avatar
                    }
                }
            `,
            { _eq: userId }
        );
        return result;
    });
    return result;
};

export default useGetUserByID;
