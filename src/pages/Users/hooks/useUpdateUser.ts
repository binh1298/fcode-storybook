import { gql } from "graphql-request";
import { UseMutationOptions } from "react-query";
import { UpdateUserMutation, UpdateUserMutationVariables } from "src/generated/graphql";

import useMutation from "src/hooks/useMutation";
import { GraphQLErrorType } from "src/types/GraphQLErrorType";

const useUpdateUser = (
    options?: UseMutationOptions<UpdateUserMutation, GraphQLErrorType, UpdateUserMutationVariables>
) => {
    return useMutation<UpdateUserMutation, UpdateUserMutationVariables>({
        queryKey: ["UpdateUser"],
        query: gql`
            mutation UpdateUser(
                $avatar: String
                $name: String!
                $userId: uuid!
                $isActive: Boolean
            ) {
                update_users_by_pk(
                    pk_columns: { userId: $userId }
                    _set: { avatar: $avatar, name: $name, isActive: $isActive }
                ) {
                    avatar
                    email
                    name
                    userId
                    role
                    isActive
                }
            }
        `,
        options,
    });
};

export default useUpdateUser;
