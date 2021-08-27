import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetAllPostsQuery, GetAllPostsQueryVariables } from "src/generated/graphql";

import useQueryClient from "src/hooks/useQueryClient";

const usePostsList = () => {
    const queryClient = useQueryClient();
    const result = useQuery<GetAllPostsQuery, unknown>(["PostsQuery"], async () => {
        const result = await queryClient.request<GetAllPostsQuery, GetAllPostsQueryVariables>(gql`
            query GetAllPosts {
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
