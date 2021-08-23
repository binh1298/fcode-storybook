import { useHistory } from "react-router-dom";

import useSnackbar from "src/components/SnackBars/useSnackbar";
import { IUser } from "src/components/UserCard";

import UpSertPage from "../UpSertPage";
import useInsertUser from "../hooks/useInsertUser";

const InsertPage = () => {
    const history = useHistory();

    const showSnackbar = useSnackbar();

    const backToListPage = () => {
        history.push("/user");
    };

    const showError = () => {
        showSnackbar({
            color: "error",
            variant: "filled",
            children: "Error",
        });
    };

    const { mutate } = useInsertUser(backToListPage, showError);

    const sendDataToServer = (user: IUser) => {
        mutate({
            name: user.name || "",
            avatar: user.avatar,
            email: user.email || "",
        });
    };

    return <UpSertPage sendDatatoServer={sendDataToServer} isUpdate={false} />;
};

export default InsertPage;
