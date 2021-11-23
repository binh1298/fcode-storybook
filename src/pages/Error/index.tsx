import ErrorIcon from "@mui/icons-material/Error";
import BoxBase from "src/components/Boxes/BoxBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import errorImage from "src/assets/erroralert.png";

const Error = () => {
    return (
        <BoxBase
            display="flex"
            flexDirection="column"
            justifyContent="center"
            bgcolor="primary"
            alignItems="center"
            style={{ minHeight: "100vh" }}
        >
            <img src={errorImage} width="50%" />
            <ErrorIcon color="secondary" fontSize="large" />
            <TypographyBase color="secondary">
                Something went wrong, please try again later!!
            </TypographyBase>
        </BoxBase>
    );
};

export default Error;
