import { useHistory, useParams } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";
import { IUser } from "src/components/UserCard";

import UpSertPage from "../UpSertPage";
import useGetSpecificUser from "../hooks/useGetSpecificUser";

import useUpdateUser from "src/pages/Users/hooks/useUpdateUser";

const UpdatePage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetSpecificUser(id);

    const history = useHistory();

    const backToListPage = () => {
        history.push("/user");
    };

    const { mutate } = useUpdateUser(backToListPage);

    const sendDataToServer = (user: IUser) => {
        mutate({
            name: user.name || "",
            isActive: user.isActive,
            avatar: user.avatar,
            userId: user.userId || "",
        });
    };
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <UpSertPage
            sendDatatoServer={sendDataToServer}
            userProps={data?.users[0]}
            isUpdate={true}
        />
    );
};

export default UpdatePage;
