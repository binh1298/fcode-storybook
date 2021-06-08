import { useCallback, useEffect, useState } from "react";

import { API_ROOT_URL } from "src/configuration";

import { Container, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import GoogleButton from "src/components/Buttons/GoogleButton";
import NormalTextField from "src/components/Textfields/NormalTextField";

import LocalStorageUtils from "src/utils/LocalStorageUtils";

interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const [redirectUrl, setRedirectUrl] = useState<string>("");
    const apiEndpoint = API_ROOT_URL;
    const redirectRouteAfterLogin = "/";
    const classes = useStyles();
    const fetchLoginUri = useCallback(async () => {
        try {
            const result = await fetch(
                `${apiEndpoint}/auth/redirect-url?returnUrl=${redirectRouteAfterLogin}`
            );
            const resultObject: ApiResponse<string> = await result.json();
            setRedirectUrl(resultObject.data);
            // eslint-disable-next-line no-console
            console.log("fetchLoginUri", resultObject.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log("error", error);
        }
    }, [apiEndpoint]);

    const fetchToken = useCallback(
        async (code: string, returnUrl?: string) => {
            try {
                const result = await fetch(`${apiEndpoint}/auth/token`, {
                    method: "POST",
                    body: JSON.stringify({
                        code,
                        returnUrl,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                });
                const resultObject = await result.json();
                // eslint-disable-next-line no-console
                console.log("fetchToken", resultObject);
                if (resultObject.success) {
                    LocalStorageUtils.setItem("token", resultObject.data);
                    window.location.reload(false);
                }
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log("error", error);
            }
        },
        [apiEndpoint]
    );

    useEffect(() => {
        if (window.location.search) {
            const query = new URLSearchParams(window.location.search);
            const code = query.get("code");
            const state = query.get("state");
            if (code && state) {
                const returnUrl = atob(state);
                fetchToken(code, returnUrl);
            }
        } else {
            fetchLoginUri();
        }
    }, [fetchLoginUri, fetchToken]);

    const startLogin = () => {
        window.location.href = redirectUrl;
    };

    return (
        <Container component="main">
            <CssBaseline />
            <Grid container style={{ minHeight: "100vh" }}>
                <Grid item xs={12} sm={6}>
                    <div style={{ width: "100%" }}></div>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    sm={6}
                    alignItems="center"
                    direction="column"
                    justify="space-between"
                    style={{ padding: 10 }}
                >
                    <BoxBase />
                    <div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minWidth: 200,
                                maxWidth: 400,
                            }}
                        >
                            <div></div>
                            <NormalTextField
                                label="Username"
                                margin="normal"
                                icon={<AccountCircle />}
                            />
                            <NormalTextField
                                label="Username"
                                margin="normal"
                                type="password"
                                icon={<LockRounded />}
                            />
                            <div style={{ height: 20 }} />
                            <ButtonBase color="primary" variant="contained" fullWidth>
                                <b>Sign in</b>
                            </ButtonBase>
                        </div>
                    </div>
                    <hr style={{ width: 20 }} />
                    <GoogleButton color="default" variant="contained" onClick={startLogin}>
                        Login With Google
                    </GoogleButton>
                    <BoxBase />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
