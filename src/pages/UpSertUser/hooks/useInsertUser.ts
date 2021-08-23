import { gql } from "graphql-request";
import { useMutation } from "react-query";
import {
    InsertUserMutationMutation,
    InsertUserMutationMutationVariables,
} from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useInsertUser = (backToListPage: () => void, showError: () => void) => {
    const queryClient = useQueryClient();
    const result = useMutation<
        InsertUserMutationMutation,
        unknown,
        InsertUserMutationMutationVariables
    >(
        ["InsertUserMutation"],
        async (variable) => {
            const result = await queryClient.request<
                InsertUserMutationMutation,
                InsertUserMutationMutationVariables
            >(
                gql`
                    mutation InsertUserMutation($email: String!, $avatar: String, $name: String!) {
                        insert_users_one(
                            object: { isActive: true, email: $email, avatar: $avatar, name: $name }
                        ) {
                            userId
                            name
                            email
                        }
                    }
                `,
                variable
            );
            return result;
        },
        {
            onSuccess: () => {
                backToListPage();
            },
            onError: () => {
                showError();
            },
        }
    );
    return result;
};

export default useInsertUser;
