import { useState } from "react";

import { Maybe } from "src/generated/graphql";

import AvatarBase from "../../../components/Avatars/AvatarBase";
import BoxBase from "../../../components/Boxes/BoxBase";
import BoxConvertDraftjsToHtml from "../../../components/Boxes/BoxConvertDraftjsToHtml";
import IconButtonBase from "../../../components/Buttons/FabBase";
import DividerBase from "../../../components/Dividers/DividerBase";
import TypographyBase from "../../../components/Typography/TypographyBase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import PostEditor from "./PostEditor";

const anonymousAvatarLink =
    "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";
export interface PostCardProps {
    authorId: Maybe<string> | undefined;
    postId: string;
    name: string | undefined;
    avatar?: string | null;
    title: string;
    content: string;
    createdAt: string;
    onUpdate: (props: { postId: string; content: string; title: string }) => void;
    onDelete: (props: { postId: string }) => void;
}
const PostCard = (props: PostCardProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const createdTime = new Date(props.createdAt).toDateString();
    const { postId } = props;
    const updateHandler = (content: string, title: string) => {
        props.onUpdate({ postId, content, title });
        setIsOpen(false);
    };
    const handleDelete = () => {
        props.onDelete({ postId });
        setIsOpen(false);
    };
    // const postCreatedTime =
    //     createdTime.toLocaleString("en-US", { dateStyle: "medium" }) +
    //     " at " +
    //     createdTime.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" });
    return (
        <BoxBase
            shouldHaveBorder={true}
            minWidth={350}
            maxWidth={500}
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
                            src={props.avatar || anonymousAvatarLink}
                            alt={props.name}
                        />
                    </BoxBase>

                    <BoxBase display="inline">
                        <TypographyBase variant="subtitle2" color="primary">
                            {props.name}
                        </TypographyBase>
                        <TypographyBase variant="caption" color="initial">
                            {createdTime}
                        </TypographyBase>
                    </BoxBase>
                </BoxBase>
                <DividerBase variant="fullWidth"></DividerBase>
                <BoxBase>
                    <TypographyBase variant="h5">{props.title}</TypographyBase>
                    {!isOpen ? (
                        <BoxConvertDraftjsToHtml input={props.content} />
                    ) : (
                        <PostEditor
                            title={props.title}
                            content={props.content}
                            onSave={updateHandler}
                            onCancel={() => setIsOpen(false)}
                        />
                    )}
                </BoxBase>
                {!isOpen && (
                    <BoxBase pt={2} width={1} display="flex" justifyContent="flex-end">
                        <BoxBase mr={1}>
                            <IconButtonBase
                                variant="round"
                                size="small"
                                color="primary"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <EditIcon />
                            </IconButtonBase>
                        </BoxBase>
                        <BoxBase>
                            <IconButtonBase
                                variant="round"
                                size="small"
                                color="secondary"
                                onClick={handleDelete}
                            >
                                <DeleteIcon />
                            </IconButtonBase>
                        </BoxBase>
                    </BoxBase>
                )}
            </BoxBase>
        </BoxBase>
    );
};

export default PostCard;
