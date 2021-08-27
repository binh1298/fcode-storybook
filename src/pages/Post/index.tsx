import React from "react";

import BoxBase from "src/components/Boxs/BoxBase";
import PostCard from "src/components/PostCard";

import usePostsList from "./hooks/usePostList";

const Post = () => {
    const { data, isLoading, refetch: refetchUsers } = usePostsList();
    if (isLoading) return <h1>Loading</h1>;
    return (
        <BoxBase>
            {data?.posts.map((post) => {
                let user = data.users.find((e) => e.userId === post.authorId);
                return (
                    <PostCard
                        key={post.postId}
                        name={user?.name}
                        title={post.title}
                        content={post.content}
                        avatar={user?.avatar}
                        createdAt={post.createdAt}
                    />
                );
            })}
        </BoxBase>
    );
};

export default Post;
