import React from "react";

import BoxBase from "src/components/Boxes/BoxBase";
import useSnackbar from "src/components/SnackBars/useSnackbar";

import useDeletePost from "./hooks/useDeletePost";
import usePostsList from "./hooks/usePostList";
import useUpdatePost from "./hooks/useUpdatePost";

import PostCard from "src/pages/Post/PostCard";

const Post = () => {
    const { data, isLoading, refetch: refetchPosts } = usePostsList();
    const snackbar = useSnackbar();
    const handleSuccess = () => {
        snackbar({ severity: "success", children: "Success!" });
    };
    const { isLoading: isPostUpdate, mutate: updatePost } = useUpdatePost(
        refetchPosts,
        handleSuccess
    );
    const { isLoading: isPostDeletem, mutate: deletePost } = useDeletePost(refetchPosts);
    if (isLoading) return <h1>Loading</h1>;
    return (
        <BoxBase>
            {data?.posts.map((post) => {
                let user = data.users.find((e) => e.userId === post.authorId);
                return (
                    <PostCard
                        key={post.postId}
                        postId={post.postId}
                        authorId={post.authorId}
                        name={user?.name}
                        title={post.title}
                        content={post.content}
                        avatar={user?.avatar}
                        createdAt={post.createdAt}
                        onUpdate={updatePost}
                        onDelete={deletePost}
                    />
                );
            })}
        </BoxBase>
    );
};

export default Post;
