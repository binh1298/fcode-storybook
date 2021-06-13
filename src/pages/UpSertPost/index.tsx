import React, { useCallback } from "react";

import graphql from "babel-plugin-relay/macro";
import { useMutation, usePreloadedQuery } from "react-relay";
import { useHistory } from "react-router-dom";
import { PagePropsWithQuery } from "src/common/types";

// import type { Environment } from "react-relay";
// import { commitMutation, useRelayEnvironment } from "react-relay";
import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import SpinnerBase from "src/components/Spinner/SpinnerBase";
import TextFieldBase from "src/components/Textfields/TextFieldBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import {
    UpSertPostCreateMutation,
    UpSertPostCreateMutationVariables,
} from "./__generated__/UpSertPostCreateMutation.graphql";
import { UpSertPostLoadPostQuery } from "./__generated__/UpSertPostLoadPostQuery.graphql";
import {
    UpSertPostUpdateMutation,
    UpSertPostUpdateMutationVariables,
} from "./__generated__/UpSertPostUpdateMutation.graphql";

import LocalStorageUtils, { User } from "src/utils/LocalStorageUtils";

export const UpSertPostCreateGraphQL = graphql`
    mutation UpSertPostCreateMutation($input: posts_insert_input!) {
        insert_posts_one(object: $input) {
            postId
            createdAt
        }
    }
`;

export const UpSertPostUpdateGraphQL = graphql`
    mutation UpSertPostUpdateMutation($post: posts_set_input, $pk: posts_pk_columns_input!) {
        update_posts_by_pk(_set: $post, pk_columns: $pk) {
            postId
            updatedAt
        }
    }
`;

export const UpSertPostLoadPostGraphQL = graphql`
    query UpSertPostLoadPostQuery($where: posts_bool_exp) {
        posts(where: $where) {
            postId
            title
            content
            authorId
        }
    }
`;

type Mode = "ADD" | "UPDATE";

function UpSertPost(props: PagePropsWithQuery<UpSertPostLoadPostQuery>) {
    const { queryReference, loadQuery } = props;
    const history = useHistory();
    const mode: Mode = history.location.pathname.startsWith("/update/posts/") ? "UPDATE" : "ADD";
    const postId: string =
        mode === "ADD" ? "" : history.location.pathname.replace("/update/posts/", "");
    const user: User | undefined = LocalStorageUtils.getUser();
    const data = usePreloadedQuery<UpSertPostLoadPostQuery>(
        UpSertPostLoadPostGraphQL,
        queryReference
    );

    const [commit, isLoading] = useMutation<UpSertPostCreateMutation | UpSertPostUpdateMutation>(
        mode === "ADD" ? UpSertPostCreateGraphQL : UpSertPostUpdateGraphQL
    );

    const [post, setPost] = React.useState({
        title: "",
        content: "",
    });

    const setInitData = useCallback(
        (postId: string) => {
            loadQuery({
                where: {
                    postId: {
                        _eq: postId,
                    },
                },
            });
            setPost({
                title: data.posts[0].title,
                content: data.posts[0].content,
            });
        },
        [data, loadQuery]
    );

    React.useEffect(() => {
        if (user?.role !== "author") {
            history.push("/");
        }
        if (mode === "UPDATE") {
            setInitData(postId);
        }
    }, [setInitData, history, user, mode, postId]);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let variables: UpSertPostCreateMutationVariables | UpSertPostUpdateMutationVariables = {
            input: {},
        };
        if (mode === "ADD") {
            variables = {
                input: {
                    content: post.content,
                    title: post.title,
                    authorId: user?.userId,
                },
            };
        } else if (mode === "UPDATE") {
            variables = {
                post: {
                    content: post.content,
                    title: post.title,
                },
                pk: {
                    postId: postId,
                },
            };
        }
        commit({
            variables: variables,
        });
    };

    if (isLoading) {
        return <SpinnerBase />;
    }

    return (
        <BoxBase width={1} pl={20} pr={20} pt={2} boxSizing="border-box">
            <BoxBase width={1} pt={3}>
                <TypographyBase align="left" variant="h3">
                    {mode} BLOG
                </TypographyBase>
            </BoxBase>
            <form onSubmit={submitHandler}>
                <BoxBase width={1} pt={5}>
                    <TextFieldBase
                        variant="outlined"
                        label="Title"
                        fullWidth
                        required
                        name="title"
                        value={post.title}
                        onChange={changeHandler}
                    />
                </BoxBase>
                <BoxBase width={1} pt={5}>
                    <TextFieldBase
                        variant="outlined"
                        label="Content"
                        fullWidth
                        required
                        name="content"
                        value={post.content}
                        onChange={changeHandler}
                    />
                </BoxBase>
                <BoxBase width={1} pt={5} display="flex" justifyContent="flex-end">
                    <BoxBase p={1}>
                        <ButtonBase type="submit" variant="contained" size="large" color="primary">
                            {mode} BLOG
                        </ButtonBase>
                    </BoxBase>
                    <BoxBase p={1}>
                        <ButtonBase variant="contained" size="large" color="secondary">
                            CANCEL
                        </ButtonBase>
                    </BoxBase>
                </BoxBase>
            </form>
        </BoxBase>
    );
}

export default UpSertPost;
