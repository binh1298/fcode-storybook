import { gql } from "graphql-request";
import { useQuery } from "react-query";

import { GetPostsListQuery, GetPostsListQueryVariables } from "./../../../generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const usePostsList = () => {
    const queryClient = useQueryClient();
    const result = useQuery<GetPostsListQuery>(["PostsQuery"], async () => {
        const result = await queryClient.request<GetPostsListQuery, GetPostsListQueryVariables>(gql`
            query GetPostsList {
                posts {
                    authorId
                    content
                    createdAt
                    postId
                    title
                }
                users {
                    avatar
                    name
                    userId
                }
            }
        `);
        return result;
    });
    return result;
};

export default usePostsList;
