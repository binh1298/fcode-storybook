import { useState } from "react";

import useGetUser from "./hooks/useGetUsers";

const User = () => {
    const [paging, setPaging] = useState<{ offset: number; limit: number }>({
        offset: 0,
        limit: 1,
    });
    const { data, isLoading } = useGetUser(paging.limit, paging.offset);

    if (isLoading) return <h1>Loading</h1>;

    const changePage = () => {
        setPaging((prev) => {
            return { ...prev, offset: 1 };
        });
    };

    return (
        <div>
            <div>{paging.offset}</div>
            {data?.users.map((user) => {
                return <h1 key={user.userId}>{user.email}</h1>;
            })}
            <button onClick={changePage}>Insert User</button>
        </div>
    );
};

export default User;
