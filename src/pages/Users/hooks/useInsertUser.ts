import { gql } from "graphql-request";
import { useMutation } from "react-query";
import {
    InsertUserOneMutationMutation,
    InsertUserOneMutationMutationVariables,
} from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useInsertUser = (refetchUsers: () => void) => {
    const queryClient = useQueryClient();

    const result = useMutation<
        InsertUserOneMutationMutation,
        unknown,
        InsertUserOneMutationMutationVariables
    >(
        ["InsertUserOneMutation"],
        async (variable) => {
            const result = await queryClient.request<
                InsertUserOneMutationMutation,
                InsertUserOneMutationMutationVariables
            >(
                gql`
                    mutation InsertUserOneMutation(
                        $avatar: String!
                        $email: String!
                        $name: String!
                    ) {
                        insert_users_one(object: { avatar: $avatar, email: $email, name: $name }) {
                            email
                            userId
                            name
                            avatar
                        }
                    }
                `,
                variable
            );
            return result;
        },
        {
            onSuccess: () => {
                refetchUsers();
            },
        }
    );
    return result;
};

export default useInsertUser;
