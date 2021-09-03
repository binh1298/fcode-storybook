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

    const showError = (message: string) => {
        showSnackbar({
            severity: "error",
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
            showError("Name and Email is empty!");
        }
    };

    return <UpSertPage sendDataToServer={sendDataToServer} isUpdate={false} />;
};

export default InsertPage;
