import { QueryKey, UseMutationOptions } from "react-query";
import { useMutation as useReactQueryMutation } from "react-query";

import useQueryClient from "./useQueryClient";

interface useMutationProps<TQuery, TVariables> {
    queryKey: QueryKey;
    query: string;
    variables?: TVariables;
    options?: UseMutationOptions<TQuery, unknown, TVariables>;
}

const useMutation = <TQuery, TVariables>({
    queryKey,
    query,
    options,
}: useMutationProps<TQuery, TVariables>) => {
    const queryClient = useQueryClient();

    return useReactQueryMutation<TQuery, unknown, TVariables>(
        queryKey,
        async (variable) => {
            const result = await queryClient.request<TQuery, TVariables>(query, variable);
            return result;
        },
        {
            ...options,
        }
    );
};

export default useMutation;
