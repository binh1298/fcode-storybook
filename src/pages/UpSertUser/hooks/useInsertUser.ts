import { gql } from "graphql-request";
import { UseMutationOptions } from "react-query";
import { InsertUserMutation, InsertUserMutationVariables } from "src/generated/graphql";

import useMutation from "src/hooks/useMutation";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const useInsertUser = (
    options?: UseMutationOptions<InsertUserMutation, GraphQLErrorType, InsertUserMutationVariables>
) => {
    return useMutation<InsertUserMutation, InsertUserMutationVariables>({
        queryKey: ["InsertUser"],
        query: gql`
            mutation InsertUser($email: String!, $avatar: String, $name: String!) {
                insert_users_one(
                    object: { isActive: true, email: $email, avatar: $avatar, name: $name }
                ) {
                    userId
                    name
                    email
                }
            }
        `,
        options,
    });
};

export default useInsertUser;
