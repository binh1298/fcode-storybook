import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { ErrorResponse } from "src/common/types";
import {
    InsertUserMutationMutation,
    InsertUserMutationMutationVariables,
} from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useInsertUser = (backToListPage: () => void, showError: (message: string) => void) => {
    const queryClient = useQueryClient();
    const result = useMutation<
        InsertUserMutationMutation,
        ErrorResponse,
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
            onError: (err) => {
                let errorCode = err.response.errors[0].extensions.code;
                switch (errorCode) {
                    case "constraint-violation":
                        showError("Email is duplicated!");
                        break;
                    default:
                        showError("Server Error");
                        break;
                }
            },
        }
    );
    return result;
};

export default useInsertUser;
