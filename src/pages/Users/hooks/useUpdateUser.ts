import { gql } from "graphql-request";
import { useMutation } from "react-query";
import {
    UpdateUserMutaionMutation,
    UpdateUserMutaionMutationVariables,
} from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const useUpdateUser = () => {
    const queryClient = useQueryClient();
    const result = useMutation<
        UpdateUserMutaionMutation,
        unknown,
        UpdateUserMutaionMutationVariables
    >([], async (variable) => {
        const result = await queryClient.request<
            UpdateUserMutaionMutation,
            UpdateUserMutaionMutationVariables
        >(
            gql`
                mutation UpdateUserMutaion(
                    $avatar: String!
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
            variable
        );
        return result;
    });
    return result;
};

export default useUpdateUser;
