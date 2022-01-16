import { useHistory, useParams } from "react-router-dom";
import { IUser } from "src/common/types";
import { Users } from "src/generated/graphql";

import { CircularProgress } from "@mui/material";
import useSnackbar from "src/components/SnackBars/useSnackbar";

import UpSertPage from "../UpSertPage";
import useGetUserDetail from "../hooks/useGetUserDetail";

import useUpdateUser from "src/pages/Users/hooks/useUpdateUser";

const UpdatePage = () => {
    const { id } = useParams<{ id: Users["userId"] }>();
    const { data, isLoading } = useGetUserDetail({ variables: { userId: id } });

    const history = useHistory();

    const showSnackbar = useSnackbar();

    const backToListPage = () => {
        history.push("/users");
    };

    const { mutate } = useUpdateUser({
        onSuccess: () => backToListPage(),
    });

    const sendDataToServer = (user: IUser) => {
        if (user.name) {
            mutate({
                name: user.name,
                isActive: user.isActive,
                avatar: user.avatar,
                userId: id,
            });
        } else {
            showSnackbar({
                color: "error",
                children: "Name is empty!",
            });
        }
    };
    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <UpSertPage
            sendDataToServer={sendDataToServer}
            userProps={data?.users_by_pk}
            isUpdate={true}
        />
    );
};

export default UpdatePage;