import { useHistory } from "react-router-dom";

import useSnackbar from "src/components/SnackBars/useSnackbar";
import { IUser } from "src/pages/Users/components/UserCard";

import UpSertPage from "../UpSertPage";
import useInsertUser from "../hooks/useInsertUser";

const InsertPage = () => {
    const history = useHistory();

    const showSnackbar = useSnackbar();

    const backToListPage = () => {
        history.push("/user");
    };

    const showError = (message: string, type: "error" | "success") => {
        showSnackbar({
            color: type,
            variant: "filled",
            children: message,
        });
    };

    const { mutate } = useInsertUser(backToListPage, showError);

    const sendDataToServer = (user: IUser) => {
        if (user.name && user.email) {
            mutate({
                name: user.name,
                avatar: user.avatar,
                email: user.email,
            });
        } else {
            showSnackbar({
                variant: "filled",
                color: "error",
                children: "Name and Email is not empty!",
            });
        }
    };

    return <UpSertPage sendDataToServer={sendDataToServer} isUpdate={false} />;
};

export default InsertPage;
