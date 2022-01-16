import { useState } from "react";

import { Link } from "react-router-dom";
import { Posts, Users } from "src/generated/graphql";

import AvatarBase from "../../../components/Avatars/AvatarBase";
import BoxBase from "../../../components/Boxes/BoxBase";
import BoxConvertDraftjsToHtml from "../../../components/Boxes/BoxConvertDraftjsToHtml";
import IconButtonBase from "../../../components/Buttons/FabBase";
import DividerBase from "../../../components/Dividers/DividerBase";
import TypographyBase from "../../../components/Typography/TypographyBase";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ButtonBase from "src/components/Buttons/ButtonBase";
import GridBase from "src/components/Grids";

import PostEditor from "./PostEditor";

const anonymousAvatarLink =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";
export interface PostCardProps {
    post: Pick<Posts, "authorId" | "content" | "createdAt" | "postId" | "title">;
    user?: Pick<Users, "name" | "avatar"> | null;
    onUpdate: (props: { postId: string; content: string; title: string }) => void;
    onDelete: (props: { postId: string }) => void;
}
const PostCard = (props: PostCardProps) => {
    const { post, user, onUpdate, onDelete } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const createdTime = new Date(post.createdAt).toDateString();
    const updateHandler = (content: string, title: string) => {
        onUpdate({ postId: post.postId, content, title });
        setIsOpen(false);
    };
    const handleDelete = () => {
        onDelete({ postId: post.postId });
        setIsOpen(false);
    };

    return (
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
            <BoxBase width={1}>
                <BoxBase display="flex">
                    <BoxBase margin={1}>
                        <AvatarBase
                            size="medium"
                            src={props.user?.avatar || anonymousAvatarLink}
                            alt={props.user?.name}
                        />
                    </BoxBase>

                    <BoxBase display="inline">
                        <TypographyBase variant="subtitle2" color="primary">
                            {user?.name}
                        </TypographyBase>
                        <TypographyBase variant="caption" color="initial">
                            {createdTime}
                        </TypographyBase>
                    </BoxBase>
                </BoxBase>
                <DividerBase variant="fullWidth"></DividerBase>
                <BoxBase>
                    {!isOpen && <TypographyBase variant="h5">{post.title}</TypographyBase>}
                    {!isOpen ? (
                        <BoxConvertDraftjsToHtml input={post.content} />
                    ) : (
                        <PostEditor
                            title={post.title}
                            content={post.content}
                            onSave={updateHandler}
                            onCancel={() => setIsOpen(false)}
                            type="update"
                        />
                    )}
                </BoxBase>
                {!isOpen && (
                    <GridBase container spacing={2} justifyContent="flex-end">
                        <GridBase item>
                            <Link to={`/posts/${post.postId}`} style={{ textDecoration: "none" }}>
                                <ButtonBase variant="contained" startIcon={<CommentIcon />}>
                                    Comment
                                </ButtonBase>
                            </Link>
                        </GridBase>
                        <GridBase item>
                            <IconButtonBase
                                variant="circular"
                                size="small"
                                color="primary"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <EditIcon />
                            </IconButtonBase>
                        </GridBase>
                        <GridBase item>
                            <IconButtonBase
                                variant="circular"
                                size="small"
                                color="secondary"
                                onClick={handleDelete}
                            >
                                <DeleteIcon />
                            </IconButtonBase>
                        </GridBase>
                    </GridBase>
                )}
            </BoxBase>
        </BoxBase>
    );
};

export default PostCard;
