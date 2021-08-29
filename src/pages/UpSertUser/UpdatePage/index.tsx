import { useHistory, useParams } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";
import useSnackbar from "src/components/SnackBars/useSnackbar";
import { IUser } from "src/pages/Users/components/UserCard";

import UpSertPage from "../UpSertPage";
import useGetSpecificUser from "../hooks/useGetSpecificUser";

import useUpdateUser from "src/pages/Users/hooks/useUpdateUser";

const UpdatePage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetSpecificUser(id);

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
                variant: "filled",
                children: "Name is not empty!",
            });
        }
    };
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <UpSertPage
            sendDataToServer={sendDataToServer}
            userProps={data?.users[0]}
            isUpdate={true}
        />
    );
};

export default UpdatePage;
