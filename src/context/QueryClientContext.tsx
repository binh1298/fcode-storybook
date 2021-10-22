import { ReactNode, useCallback, useState, useMemo, createContext } from "react";

import { GraphQLClient } from "graphql-request";
import { REACT_APP_HASURA_END_POINT } from "src/configuration";

import LocalStorageUtils from "src/utils/LocalStorageUtils";

interface QueryClientContextProps {
    queryClient: GraphQLClient;
    updateQueryClient: (token: string) => void;
}

export const GraphQLQueryClientContext = createContext({} as QueryClientContextProps);

const GraphQLQueryClientContextProvider = ({ children }: { children: ReactNode }) => {
    const defaultQueryClient = useMemo(() => {
        const queryClient = new GraphQLClient(REACT_APP_HASURA_END_POINT, {
            headers: {
                Authorization: `Bearer ${LocalStorageUtils.getToken()}`,
            },
        });
        return queryClient;
    }, []);

    const [queryClient, setQueryClient] = useState<GraphQLClient>(defaultQueryClient);

    const updateQueryClient = useCallback((token: string) => {
        const queryClient = new GraphQLClient(REACT_APP_HASURA_END_POINT, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setQueryClient(queryClient);
    }, []);

    const memoValue = useMemo(() => {
        return {
            queryClient,
            updateQueryClient,
        };
    }, [queryClient, updateQueryClient]);

    return (
        <GraphQLQueryClientContext.Provider value={memoValue}>
            {children}
        </GraphQLQueryClientContext.Provider>
    );
};

export default GraphQLQueryClientContextProvider;
