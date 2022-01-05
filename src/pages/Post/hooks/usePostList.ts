import { gql } from "graphql-request";
import { GetPostsListQuery, GetPostsListQueryVariables } from "src/generated/graphql";

import useQuery from "src/hooks/useQuery";

const usePostsList = () => {
    return useQuery<GetPostsListQuery, GetPostsListQueryVariables>({
        queryKey: ["GetPostsList"],
        query: gql`
            query GetPostsList {
                posts {
                    authorId
                    postId
                    title
                    createdAt
                    content
                    user {
                        avatar
                        name
                    }
                }
            }
        `,
    });
};

export default usePostsList;
