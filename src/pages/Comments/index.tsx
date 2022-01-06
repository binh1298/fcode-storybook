import { useParams } from "react-router-dom";

import CommentList from "./components/CommentList";
import {
    AccessTime as AccessTimeIcon,
    Person as PersonIcon,
    QuestionAnswer as QuestionAnswerIcon,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import BoxBase from "src/components/Boxes/BoxBase";
import CommentForm from "src/components/Comments/CommentForm";
import DividerBase from "src/components/Dividers/DividerBase";
import Footer from "src/components/Footers/Footer";
import CircularProgressBase from "src/components/Progress/CircularProgressBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import useCommentsList from "./hooks/useCommentsList";
import useInsertComment from "./hooks/useInsertComment";
import usePostDetail from "./hooks/usePostDetail";

import LocalStorageUtils from "src/utils/LocalStorageUtils";

type Param = {
    id: string;
};
const Comments = () => {
    const user = LocalStorageUtils.getUser();
    const postId = useParams<Param>().id!;

    const {
        data: postDetailData,
        isLoading: isPostDetailLoading,
        isError: isPostDetailError,
    } = usePostDetail({ variables: { postId } });
    const {
        data: commentsData,
        isLoading: isCommentsLoading,
        refetch: refetchComments,
    } = useCommentsList({ variables: { postId } });
    const { isLoading, mutate: insertCommentQuery } = useInsertComment({
        onSuccess: () => {
            refetchComments();
        },
    });

    const post = postDetailData?.posts[0];
    const author = post?.user;
    const createdDate = new Date(post?.createdAt);
    const comments = commentsData?.posts_by_pk?.comments;

    const insertComment = (content: string) => {
        insertCommentQuery({ authorId: user.userId, content, postId });
    };

    const validateComment = (content: string): boolean => {
        if (content.length > 0) {
            return true;
        }
        return false;
    };

    const createdPostDate = `${createdDate.getDate()}/${
        createdDate.getMonth() + 1
    }/${createdDate.getFullYear()}`;

    return (
        <BoxBase
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            bgcolor="primary"
            style={{ minHeight: "100vh" }}
        >
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={11} md={9} lg={8}>
                    <BoxBase
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="common"
                        style={{ minHeight: "100vh" }}
                    >
                        {isPostDetailLoading ? (
                            <CircularProgressBase color="secondary" />
                        ) : isPostDetailError ? (
                            <BoxBase ml={2} mr={2}>
                                <TypographyBase align="center" variant="h6" color="error">
                                    Fail to fetch Post Detail
                                </TypographyBase>
                                <TypographyBase align="center" variant="h6" color="error">
                                    Please try again later!
                                </TypographyBase>
                            </BoxBase>
                        ) : (
                            <Grid container justifyContent="center">
                                <Grid item xs={12} sm={10}>
                                    <BoxBase
                                        pt={3}
                                        pb={1}
                                        bgcolor="secondary"
                                        borderRadius="0 0 1rem 1rem"
                                    >
                                        <TypographyBase align="center" variant="h4">
                                            {post?.title}
                                        </TypographyBase>
                                        <BoxBase mb={1} mt={1}>
                                            <Grid container justifyContent="center">
                                                <Grid item xs={4} sm={5}>
                                                    <BoxBase
                                                        display="flex"
                                                        justifyContent="flex-end"
                                                    >
                                                        <AccessTimeIcon fontSize="small" />
                                                        <TypographyBase variant="subtitle2">
                                                            {createdPostDate}
                                                        </TypographyBase>
                                                    </BoxBase>
                                                </Grid>
                                                <Grid item xs={3} sm={2}>
                                                    <BoxBase display="flex" justifyContent="center">
                                                        <PersonIcon fontSize="small" />
                                                        <TypographyBase variant="subtitle2">
                                                            {author?.name}
                                                        </TypographyBase>
                                                    </BoxBase>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <BoxBase display="flex">
                                                        <QuestionAnswerIcon fontSize="small" />
                                                        <TypographyBase variant="subtitle2">
                                                            {comments?.length} comments
                                                        </TypographyBase>
                                                    </BoxBase>
                                                </Grid>
                                            </Grid>
                                        </BoxBase>
                                    </BoxBase>
                                    <BoxBase mt={3} mb={3} pl={3} pr={3}>
                                        <TypographyBase variant="body1">
                                            {post?.content}
                                        </TypographyBase>
                                    </BoxBase>
                                    <DividerBase variant="middle" />
                                    <BoxBase
                                        bgcolor="secondary"
                                        mt={3}
                                        ml={2}
                                        mr={2}
                                        p={2}
                                        borderRadius={8}
                                    >
                                        <TypographyBase align="center" variant="h6">
                                            {comments?.length} thoughts on &ldquo;{post?.title}
                                            &rdquo;
                                        </TypographyBase>
                                    </BoxBase>
                                    <BoxBase mt={10} mb={8}>
                                        <CommentList
                                            isLoading={isCommentsLoading}
                                            data={commentsData}
                                            refetchCommentsHandler={refetchComments}
                                            validateCommentHandler={validateComment}
                                        />
                                    </BoxBase>
                                    <BoxBase mt={5} mb={10} pl={3} pr={3}>
                                        <TypographyBase variant="h6">
                                            <BoxBase
                                                fontWeight="fontWeightMedium"
                                                component="span"
                                                display="block"
                                                mb={1}
                                            >
                                                LEAVE A REPLY
                                            </BoxBase>
                                        </TypographyBase>
                                        <CommentForm
                                            isLoading={isLoading}
                                            submit={insertComment}
                                            validate={validateComment}
                                        />
                                    </BoxBase>
                                </Grid>
                            </Grid>
                        )}
                    </BoxBase>
                </Grid>
            </Grid>

            <Footer bgcolor="secondary" />
        </BoxBase>
    );
};

export default Comments;
