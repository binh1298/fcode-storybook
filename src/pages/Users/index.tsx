import { useState } from "react";

import { useHistory } from "react-router-dom";

import { CircularProgress, useMediaQuery, useTheme } from "@material-ui/core";
import { Add, ArrowLeft, ArrowRight } from "@material-ui/icons";
import BoxBase from "src/components/Boxs/BoxBase";
import IconButtonBase from "src/components/Buttons/FabBase";
import DividerBase from "src/components/Dividers/DividerBase";
import TextFieldBase from "src/components/Textfields/TextFieldBase";
import TypographyBase from "src/components/Typography/TypographyBase";
import UserCard from "src/pages/Users/components/UserCard";

import useGetUser from "./hooks/useGetUsers";
import useUpdateUser from "./hooks/useUpdateUser";

const User = () => {
    const [filter, setFilter] = useState<{ offset: number; limit: number; search: string }>({
        offset: 0,
        limit: 10,
        search: "%%",
    });

    const history = useHistory();
    const theme = useTheme();
    const { data, isLoading, refetch: userRefresh } = useGetUser(
        filter.limit,
        filter.offset,
        filter.search
    );
    const { mutate } = useUpdateUser(userRefresh);

    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const onUpdate = (userId: string) => {
        history.push(`/users/${userId}`);
    };

    const onChangeStatus = (userId: string) => {
        let selectedUser = data && data.users.find((user) => user.userId === userId);
        if (selectedUser) {
            mutate({
                avatar: selectedUser.avatar,
                name: selectedUser.name,
                userId: selectedUser.userId,
                isActive: !selectedUser?.isActive,
            });
        }
    };

    const filterUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFilter({ ...filter, offset: 0, search: `%${e.target.value}%` });
    };

    const changePage = (type: "next" | "previous") => {
        let offset = filter.offset;
        setFilter({ ...filter, offset: type === "next" ? offset + 1 : offset - 1 });
    };

    let userList = null;
    if (isLoading) {
        userList = <CircularProgress />;
    } else {
        userList = (
            <BoxBase mt={1} width={1} display="flex" flexWrap="wrap">
                {data?.users.map((user) => {
                    return (
                        <BoxBase minHeight={100} boxSizing="border-box" p={1} key={user.email}>
                            <UserCard
                                onUpdate={onUpdate}
                                onChangeStatus={onChangeStatus}
                                {...user}
                            />
                        </BoxBase>
                    );
                })}
            </BoxBase>
        );
    }

    return (
        <BoxBase width={1}>
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
                    <TypographyBase variant="h3" align="center">
                        Manage Users
                    </TypographyBase>
                </BoxBase>
            </BoxBase>
            <BoxBase mt={5} width={1} display="flex" justifyContent="center">
                <BoxBase width={0.8}>
                    <BoxBase
                        width={1}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <TypographyBase hidden={matches} variant="h4">
                            Users List
                        </TypographyBase>
                        <BoxBase display="flex">
                            <TextFieldBase
                                fullWidth={matches}
                                onChange={filterUsers}
                                label="Search by Email"
                            />
                            <IconButtonBase
                                onClick={() => history.push("/users/create")}
                                color="secondary"
                            >
                                <Add />
                            </IconButtonBase>
                        </BoxBase>
                    </BoxBase>
                    <DividerBase />
                    <BoxBase pt={2} display="flex" justifyContent="center">
                        <BoxBase pr={1}>
                            <IconButtonBase
                                disabled={filter.offset === 0 || data?.users.length === 0}
                                color="secondary"
                                onClick={() => changePage("previous")}
                            >
                                <ArrowLeft />
                            </IconButtonBase>
                        </BoxBase>
                        <BoxBase>
                            <IconButtonBase
                                disabled={data && data?.users.length < filter.limit}
                                color="secondary"
                                onClick={() => changePage("next")}
                            >
                                <ArrowRight />
                            </IconButtonBase>
                        </BoxBase>
                    </BoxBase>
                    {userList}
                </BoxBase>
            </BoxBase>
        </BoxBase>
    );
};

export default User;
