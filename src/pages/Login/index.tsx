import React, { useCallback, useEffect, useState } from "react";

import { useHistory } from "react-router";
import { API_ROOT_URL } from "src/configuration";

import { Grid, Hidden } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import GoogleButton from "src/components/Buttons/GoogleButton";
import useSnackbar from "src/components/SnackBars/useSnackbar";
import NormalTextField from "src/components/Textfields/NormalTextField";
import TypographyBase from "src/components/Typography/TypographyBase";

import fcodeImage from "src/assets/fcode.png";

// import LocalStorageUtils from "src/utils/LocalStorageUtils";

interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}
const Login = () => {
    const [redirectUrl, setRedirectUrl] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const apiEndpoint = API_ROOT_URL;
    const redirectRouteAfterLogin = "/";
    const history = useHistory();
    const snackbar = useSnackbar();
    const handleClose = () => {
        setIsError(false);
    };
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
                    // LocalStorageUtils.setItem("token", resultObject.data);
                    history.push(redirectRouteAfterLogin);
                } else if (resultObject.data.code === 401) {
                    // setIsError(true);
                    snackbar({
                        children: "This is an error alert — check it out!",
                        severity: "error",
                    });
                }
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log("error", error);
            }
        },
        [apiEndpoint, history, snackbar]
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
        window.open(redirectUrl);
    };

    return (
        <React.Fragment>
            {/* <SnackbarBase open={isError} autoHideDuration={6000} onClose={handleClose}>
                <AlertBase severity="error" variant="filled" onClose={handleClose}>
                    Invalid credential!
                </AlertBase>
            </SnackbarBase> */}
            <Grid container style={{ minHeight: "100vh" }}>
                <Hidden only="xs">
                    <Grid item xs={12} sm={6}>
                        <BoxBase
                            width={1}
                            bgcolor="primary"
                            minHeight={1}
                            justifyContent="center"
                            alignItems="center"
                            display="flex"
                        >
                            <img src={fcodeImage} width="50%" />
                        </BoxBase>
                    </Grid>
                </Hidden>

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
                                minWidth: 300,
                                maxWidth: 400,
                            }}
                        >
                            <TypographyBase variant="h3" color="primary">
                                Sign in
                            </TypographyBase>
                            <div style={{ height: 20 }} />
                            <NormalTextField
                                label="Username or Email"
                                margin="normal"
                                icon={<AccountCircle />}
                                fullWidth
                            />
                            <NormalTextField
                                label="Password"
                                margin="normal"
                                type="password"
                                icon={<LockRounded />}
                                fullWidth
                            />
                            <div style={{ height: 20 }} />
                            <ButtonBase color="primary" variant="contained" fullWidth>
                                <b>Sign in</b>
                            </ButtonBase>
                            <BoxBase
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <hr
                                    style={{
                                        border: "solid 1px",
                                        margin: "auto 20px",
                                        width: "70px",
                                    }}
                                />
                                <p>or</p>
                                <hr
                                    style={{
                                        border: "solid 1px",
                                        margin: "auto 20px",
                                        width: "70px",
                                    }}
                                />
                            </BoxBase>
                            <GoogleButton
                                color="default"
                                variant="outlined"
                                onClick={startLogin}
                                fullWidth
                            >
                                Login With Google
                            </GoogleButton>
                        </div>
                    </div>

                    <BoxBase />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Login;
