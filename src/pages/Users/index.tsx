import useInsertUser from "src/pages/Users/hooks/useInsertUser";
import useUsersList from "src/pages/Users/hooks/useUsersList";

const Demo = () => {
    const { data, isLoading, refetch: refetchUsers } = useUsersList();
    const { mutate } = useInsertUser(refetchUsers);

    if (isLoading) return <h1>Loading</h1>;
    const insertUser = () => {
        mutate({
            avatar: "kien gui link di",
            email: "kienkhongguilink1@gmail.com",
            name: "Kien gui link di mau len",
        });
    };
    return (
        <div>
            {data?.users.map((user) => {
                return <h1 key={user.userId}>{user.email}</h1>;
            })}
            <button onClick={insertUser}>Insert User</button>
        </div>
    );
};

export default Demo;
