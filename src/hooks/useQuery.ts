import { QueryKey, UseQueryOptions } from "react-query";
import { useQuery as useRQQuery } from "react-query";

import useQueryClient from "./useQueryClient";

interface useQueryProps<TQuery, TVariables> {
    queryKey: QueryKey;
    query: string;
    variables?: TVariables;
    options?: UseQueryOptions<TQuery, unknown>;
}

const useQuery = <TQuery, TVariables>({
    queryKey,
    query,
    options,
    variables,
}: useQueryProps<TQuery, TVariables>) => {
    const queryClient = useQueryClient();

    return useRQQuery<TQuery, unknown>(
        queryKey,
        async () => {
            const result = await queryClient.request<TQuery, TVariables>(query, variables);
            return result;
        },
        {
            ...options,
        }
    );
};

export default useQuery;
