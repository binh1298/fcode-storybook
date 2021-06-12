import React from "react";

import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

// import type { Environment } from "react-relay";
// import { commitMutation, useRelayEnvironment } from "react-relay";
import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import TextFieldBase from "src/components/Textfields/TextFieldBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import { UpSertPostCreateMutation } from "./__generated__/UpSertPostCreateMutation.graphql";

import LocalStorageUtils from "src/utils/LocalStorageUtils";

export const UpSertPostCreateGraphQL = graphql`
    mutation UpSertPostCreateMutation($input: posts_insert_input!) {
        insert_posts_one(object: $input) {
            postId
            createdAt
        }
    }
`;

function UpSertPost() {
    const [commit, isLoading] = useMutation<UpSertPostCreateMutation>(UpSertPostCreateGraphQL);
    const [post, setPost] = React.useState({
        title: "",
        content: "",
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.log(post);
        // eslint-disable-next-line no-console
        commit({
            variables: {
                input: {
                    content: post.content,
                    title: post.title,
                    authorId: LocalStorageUtils.getUser()?.userId,
                },
            },
        });
    };

    if (isLoading) {
        // eslint-disable-next-line no-console
        console.log("loading");
        return <div>loading</div>;
    }

    return (
        <BoxBase width={1} pl={20} pr={20} pt={2} boxSizing="border-box">
            <BoxBase width={1} pt={3}>
                <TypographyBase align="left" variant="h3">
                    Create Blog
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
                            Create Blog
                        </ButtonBase>
                    </BoxBase>
                    <BoxBase p={1}>
                        <ButtonBase variant="contained" size="large" color="secondary">
                            Cancel
                        </ButtonBase>
                    </BoxBase>
                </BoxBase>
            </form>
        </BoxBase>
    );
}

export default UpSertPost;
