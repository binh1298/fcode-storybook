import BoxBase from "src/components/Boxes/BoxBase";
import Footer from "src/components/Footers/Footer";
import Grid from "src/components/Grids";
import CircularProgressBase from "src/components/Progress/CircularProgressBase";
import useSnackbar from "src/components/SnackBars/useSnackbar";

import PostEditor from "./PostCard/PostEditor";
import useDeletePost from "./hooks/useDeletePost";
import useInsertPost from "./hooks/useInsertPost";
import usePostsList from "./hooks/usePostList";
import useUpdatePost from "./hooks/useUpdatePost";

import PostCard from "src/pages/Post/PostCard";
import LocalStorageUtils from "src/utils/LocalStorageUtils";

const Post = () => {
    const { data, isLoading, refetch: refetchPosts } = usePostsList();
    const snackbar = useSnackbar();
    const onSuccessUpdate = () => {
        refetchPosts();
        snackbar({ severity: "success", children: "Success!" });
    };
    const { isLoading: isPostUpdate, mutate: updatePost } = useUpdatePost(onSuccessUpdate);
    const { isLoading: isInsert, mutate: insertPost } = useInsertPost(refetchPosts);
    const { isLoading: isPostDelete, mutate: deletePost } = useDeletePost({
        onSuccess: () => {
            refetchPosts();
        },
    });

    const insertPostHandler = (content: string, title: string) => {
        if (content.trim() == "" && title.trim() == "") {
            snackbar({ severity: "error", children: "Content and title must not be blank!" });
        } else {
            const userId = LocalStorageUtils.getUser().userId;
            insertPost({ authorId: userId, content, title });
        }
    };
    return (
        <BoxBase
            display="flex"
            bgcolor="primary"
            style={{ minHeight: "100vh" }}
            justifyContent="flex-end"
            flexDirection="column"
        >
            <Grid container justifyContent="center">
                {isLoading || isPostDelete || isPostUpdate || isInsert ? (
                    <CircularProgressBase color="secondary" />
                ) : (
                    <BoxBase
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        {data?.posts.map((post) => {
                            return (
                                <PostCard
                                    key={post.postId}
                                    postId={post.postId}
                                    authorId={post.authorId}
                                    title={post.title}
                                    content={post.content}
                                    createdAt={post.createdAt}
                                    user={post.user}
                                    onUpdate={updatePost}
                                    onDelete={deletePost}
                                />
                            );
                        })}
                        <BoxBase
                            shouldHaveBorder={true}
                            minWidth={500}
                            maxWidth={600}
                            minHeight={100}
                            boxSizing="border-box"
                            p={2}
                            display="flex"
                            alignItems="center"
                            borderRadius={5}
                            margin={2}
                            bgcolor="common"
                        >
                            <PostEditor onSave={insertPostHandler} type="insert" />
                        </BoxBase>
                    </BoxBase>
                )}
            </Grid>
            <Footer bgcolor="secondary" />
        </BoxBase>
    );
};

export default Post;
