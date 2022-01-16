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

import { useTranslation } from "react-i18next";
import PostCard from "src/pages/Post/PostCard";
import LocalStorageUtils from "src/utils/LocalStorageUtils";

const Post = () => {
    const { data, isLoading, refetch: refetchPosts } = usePostsList();
    const { t } = useTranslation(["posts"]);
    const snackbar = useSnackbar();
    const onSuccessUpdate = () => {
        refetchPosts();
        snackbar({ severity: "success", children: t("posts:successfulMessage") });
    };
    const { isLoading: isPostUpdate, mutate: updatePost } = useUpdatePost({
        onSuccess: () => {
            onSuccessUpdate();
        },
    });
    const { isLoading: isInsert, mutate: insertPost } = useInsertPost({
        onSuccess: () => {
            onSuccessUpdate();
        },
    });
    const { isLoading: isPostDelete, mutate: deletePost } = useDeletePost({
        onSuccess: () => {
            onSuccessUpdate();
        },
    });

    const insertPostHandler = (content: string, title: string) => {
        if (content.trim() == "" && title.trim() == "") {
            snackbar({ severity: "error", children: t("posts:errorMessage") });
        } else {
            const userId = LocalStorageUtils.getUser().userId;
            insertPost({ authorId: userId, content, title });
        }
    };
    return (
        <BoxBase
            display="flex"
            bgcolor="common"
            style={{ minHeight: "100vh" }}
            justifyContent="flex-end"
            flexDirection="column"
            paddingTop={10}
        >
            <Grid container justifyContent="center">
                <BoxBase
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    {isLoading || isPostDelete || isPostUpdate || isInsert ? (
                        <CircularProgressBase color="secondary" />
                    ) : (
                        data?.posts.map((post) => {
                            return (
                                <PostCard
                                    key={post.postId}
                                    post={post}
                                    user={post.user}
                                    onUpdate={updatePost}
                                    onDelete={deletePost}
                                />
                            );
                        })
                    )}
                    <BoxBase
                        shouldHaveBorder={true}
                        width={600}
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
            </Grid>
            <Footer bgcolor="secondary" />
        </BoxBase>
    );
};

export default Post;
