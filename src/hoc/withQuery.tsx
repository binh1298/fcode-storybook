import { ComponentType } from "react";

import { PreloadedQuery, useQueryLoader } from "react-relay";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { PagePropsWithQuery } from "src/common/types";

const withQuery = <T extends OperationType>(
    WrappedComponent: ComponentType<PagePropsWithQuery<T>>,
    query: GraphQLTaggedNode,
    preloadedQuery: PreloadedQuery<T>
) => {
    return () => {
        const [queryReference, loadQuery] = useQueryLoader<T>(query, preloadedQuery);

        if (!queryReference) return null;
        return <WrappedComponent queryReference={queryReference} loadQuery={loadQuery} />;
    };
};

export default withQuery;
