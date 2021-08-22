import BoxBase from "src/components/Boxs/BoxBase";
import DividerBase from "src/components/Dividers/DividerBase";
import TypographyBase from "src/components/Typography/TypographyBase";

// import useGetUser from "./hooks/useGetUsers";

const User = () => {
    // const [paging, setPaging] = useState<{ offset: number; limit: number }>({
    //     offset: 0,
    //     limit: 1,
    // });

    // const { errors, setError, register, handleSubmit, clearErrors } = useForm();

    // const { data, isLoading } = useGetUser(paging.limit, paging.offset);

    // if (isLoading) return <h1>Loading</h1>;

    // const changePage = () => {
    //     setPaging((prev) => {
    //         return { ...prev, offset: 1 };
    //     });
    // };

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
                    <TypographyBase variant="h3">Manage Users</TypographyBase>
                </BoxBase>
            </BoxBase>
            <BoxBase mt={5} width={1} display="flex" justifyContent="center">
                <BoxBase width={4 / 5}>
                    <TypographyBase variant="h4">Users List</TypographyBase>
                    <DividerBase />
                </BoxBase>
            </BoxBase>
        </BoxBase>
    );
};

export default User;
