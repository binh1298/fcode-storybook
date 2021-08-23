import { gql } from "graphql-request";
import { useQuery } from "react-query";
import {
    GetSpecificUserQueryQuery,
    GetSpecificUserQueryQueryVariables,
} from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useGetSpecificUser = (userId: string) => {
    const queryClient = useQueryClient();
    const result = useQuery(["GetSpecificUserQuery", { _eq: userId }], async () => {
        const result = await queryClient.request<
            GetSpecificUserQueryQuery,
            GetSpecificUserQueryQueryVariables
        >(
            gql`
                query GetSpecificUserQuery($_eq: uuid!) {
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

export default useGetSpecificUser;
