import { BaseSyntheticEvent, useState } from "react";

import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import TextFieldBase from "src/components/Textfields/TextFieldBase";
import TypographyBase from "src/components/Typography/TypographyBase";
import { anonymousAvatarLink, IUser } from "src/components/UserCard";

interface IUpSertPageProps {
    userProps?: IUser;
    isUpdate: boolean;
    sendDatatoServer: (user: IUser) => void;
}
const UpSertPage = (props: IUpSertPageProps) => {
    const generateDefaultValue = (userProps?: IUser) => {
        if (!userProps) {
            return {
                avatar: "",
                email: "",
                name: "",
                isActive: false,
            };
        }
        return {
            avatar: userProps.avatar || "",
            email: userProps.email || "",
            name: userProps.name || "",
            isActive: userProps.isActive || true,
            userId: userProps.userId || "",
        };
    };
    const [user, setUser] = useState<IUser>(generateDefaultValue(props.userProps));
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.sendDatatoServer(user);
    };

    const avatarStyle = {
        width: "inherit",
        height: "inherit",
    };

    return (
        <BoxBase>
            <BoxBase width={1} display="flex" justifyContent="center">
                <BoxBase
                    width={4 / 5}
                    bgcolor="secondary"
                    minHeight={150}
                    borderRadius="0 0 1rem 1rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <TypographyBase variant="h3">
                        {props.isUpdate ? "UPDATE" : "CREATE"} USER
                    </TypographyBase>
                </BoxBase>
            </BoxBase>
            <BoxBase width={1} mt={5} display="flex" justifyContent="center" alignItems="center">
                <BoxBase width={1 / 5}>
                    <BoxBase height={80} p={1}>
                        <TextFieldBase
                            name="name"
                            required
                            fullWidth
                            label="Name"
                            type="text"
                            onChange={onChange}
                            value={user.name}
                        />
                    </BoxBase>
                    <BoxBase height={80} p={1}>
                        <TextFieldBase
                            name="email"
                            required
                            disabled={props.isUpdate}
                            fullWidth
                            label="Email"
                            type="email"
                            onChange={onChange}
                            value={user.email}
                        />
                    </BoxBase>
                    <BoxBase height={80} p={1}>
                        <TextFieldBase
                            name="avatar"
                            fullWidth
                            label="Avatar"
                            type="text"
                            onChange={onChange}
                            value={user.avatar}
                        />
                    </BoxBase>
                    <BoxBase display="flex" mt={1} justifyContent="center">
                        <BoxBase mr={1}>
                            <ButtonBase
                                type="submit"
                                size="large"
                                variant="contained"
                                color="primary"
                                onClick={onSubmit}
                            >
                                SAVE
                            </ButtonBase>
                        </BoxBase>
                    </BoxBase>
                </BoxBase>
                <BoxBase width={1 / 10}></BoxBase>
                <BoxBase borderRadius="50%" width={300} boxSizing="border-box" height={300}>
                    <img
                        onError={(e: BaseSyntheticEvent) => {
                            e.target.onerror = null;
                            e.target.src = anonymousAvatarLink;
                        }}
                        src={user.avatar || anonymousAvatarLink}
                        style={avatarStyle}
                    />
                </BoxBase>
            </BoxBase>
        </BoxBase>
    );
};

export default UpSertPage;
