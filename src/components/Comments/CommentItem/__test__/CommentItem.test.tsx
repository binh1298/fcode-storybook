import CommentItem, { CommentItemProps } from "..";
import { defaultAvatarSrc } from "..";

import { render, screen, fireEvent } from "@testing-library/react";
import convertLocateTime from "src/utils/convertLocalTime";

describe("<CommentItem />", () => {
    let props: CommentItemProps;

    it("should exist children with default props", () => {
        let deletedCommentId = "";
        let updatedCommentInfo = {
            commendId: "",
            content: "",
        };
        const commentId = "commentId";
        const content = "test comment item";
        const authorName = "F-Code";
        const createdAt = "27 Aug 2014 17:00:00 GMT+7";
        props = {
            commentId,
            authorName,
            content,
            createdAt,
            deleteCommentHandler: ({ commentId }) => {
                deletedCommentId = commentId;
            },
            updateCommentHandler: ({ commentId, content }) => {
                updatedCommentInfo.commendId = commentId;
                updatedCommentInfo.content = content;
            },
        };

        render(<CommentItem {...props} />);
        const CommentItemAvatar = screen.getByTestId("CommentItem__avatar");
        expect(CommentItemAvatar.querySelector("img")?.src).toBe(defaultAvatarSrc);

        const CommentItemContent = screen.getByTestId("CommentItem__content");
        expect(CommentItemContent.innerHTML).toBe(content);

        const CommentItemAuthor = screen.getByTestId("CommentItem__author");
        expect(CommentItemAuthor.innerHTML).toBe(authorName);

        const commentCreatedTime = convertLocateTime({ time: createdAt });
        const CommentItemCreateAt = screen.getByTestId("CommentItem__createdAt");
        expect(CommentItemCreateAt.innerHTML).toBe(commentCreatedTime);

        const CommentItemButtons = screen
            .getByTestId("CommentItem__buttons")
            .querySelectorAll("button");
        const CommentItemDelete = CommentItemButtons[1];
        fireEvent.click(CommentItemDelete!);
        expect(deletedCommentId).toBe(commentId);

        const CommentItemUpdate = CommentItemButtons[0];
        fireEvent.click(CommentItemUpdate!);
        const CommentItemCommentForm = screen.getByTestId("CommentItem__commentForm");
        const CommentItemUpdateButton = CommentItemCommentForm.querySelector("button");
        fireEvent.click(CommentItemUpdateButton!);
        expect(updatedCommentInfo.commendId).toBe(commentId);
        expect(updatedCommentInfo.content).toBe(content);
    });

    it("should exist children with disable delete and update", () => {
        const commentId = "commentId";
        const authorName = "F-Code";
        const authorAvatar =
            "https://res.cloudinary.com/dq7l8216n/image/upload/v1620235303/FCode-Avatar.png";
        const content = "test comment item";
        const createdAt = "27 Aug 2014 17:00:00 GMT+7";
        props = {
            commentId,
            authorName,
            authorAvatar,
            content,
            createdAt,
            deleteCommentHandler: () => {},
            isDeleteCommentLoading: true,
            updateCommentHandler: () => {},
            isUpdateCommentLoading: true,
        };

        render(<CommentItem {...props} />);
        const CommentItemAvatar = screen.getByTestId("CommentItem__avatar");
        expect(CommentItemAvatar.querySelector("img")?.src).toBe(authorAvatar);

        const CommentItemContent = screen.getByTestId("CommentItem__content");
        expect(CommentItemContent.innerHTML).toBe(content);

        const CommentItemAuthor = screen.getByTestId("CommentItem__author");
        expect(CommentItemAuthor.innerHTML).toBe(authorName);

        const commentCreatedTime = convertLocateTime({ time: createdAt });
        const CommentItemCreateAt = screen.getByTestId("CommentItem__createdAt");
        expect(CommentItemCreateAt.innerHTML).toBe(commentCreatedTime);

        const CommentItemButtons = screen
            .getByTestId("CommentItem__buttons")
            .querySelectorAll("button");
        const CommentItemDelete = CommentItemButtons[1];
        expect(CommentItemDelete.disabled).toBe(true);
    });
});
