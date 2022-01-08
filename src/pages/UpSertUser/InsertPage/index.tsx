import { useHistory } from "react-router-dom";

import useSnackbar from "src/components/SnackBars/useSnackbar";
import { IUser } from "src/pages/Users/components/UserCard";

import UpSertPage from "../UpSertPage";
import useInsertUser from "../hooks/useInsertUser";

const InsertPage = () => {
    const history = useHistory();

    const showSnackbar = useSnackbar();

    const backToListPage = () => {
        history.push("/users");
    };

    const showError = (message: string) => {
        showSnackbar({
            severity: "error",
            children: message,
        });
    };

    const { mutate } = useInsertUser({
        onSuccess: () => backToListPage(),
        onError: (err) => {
            let errorCode = err.response.errors[0].extensions.code;
            switch (errorCode) {
                case "constraint-violation":
                    showError("Email is duplicated!");
                    break;
                default:
                    showError("Server Error");
                    break;
            }
        },
    });

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
