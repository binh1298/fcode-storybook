import { QueryKey, UseMutationOptions } from "react-query";
import { useMutation as useRQMutation } from "react-query";

import useQueryClient from "./useQueryClient";

import { GraphQLErrorType } from "src/types/GraphQLErrorType";

interface useMutationProps<TQuery, TVariables> {
    queryKey: QueryKey;
    query: string;
    options?: UseMutationOptions<TQuery, GraphQLErrorType, TVariables>;
}

const useMutation = <TQuery, TVariables>({
    queryKey,
    query,
    options,
}: useMutationProps<TQuery, TVariables>) => {
    const queryClient = useQueryClient();

    return useRQMutation<TQuery, GraphQLErrorType, TVariables>(
        queryKey,
        async (variables) => {
            const result = await queryClient.request<TQuery, TVariables>(query, variables);
            return result;
        },
        options
    );
};

export default useMutation;
