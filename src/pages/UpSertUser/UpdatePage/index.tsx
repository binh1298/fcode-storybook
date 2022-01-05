import { useHistory, useParams } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import useSnackbar from "src/components/SnackBars/useSnackbar";
import { IUser } from "src/pages/Users/components/UserCard";

import UpSertPage from "../UpSertPage";
import useGetUserByID from "../hooks/useGetUserByID";

import useUpdateUser from "src/pages/Users/hooks/useUpdateUser";

const UpdatePage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetUserByID(id);

    const history = useHistory();

    const showSnackbar = useSnackbar();

    const backToListPage = () => {
        history.push("/user");
    };

    const { mutate } = useUpdateUser(backToListPage);

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
