import React, { useCallback, useEffect, useState } from "react";

import { useHistory } from "react-router";
import { API_ROOT_URL } from "src/configuration";

import { AccountCircle, LockRounded } from "@mui/icons-material";
import { Grid, Hidden } from "@mui/material";
import BoxBase from "src/components/Boxes/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import GoogleButton from "src/components/Buttons/GoogleButton";
import useSnackbar from "src/components/SnackBars/useSnackbar";
import ThematicBreak from "src/components/ThematicBreak";
import TypographyBase from "src/components/Typography/TypographyBase";

import { useTranslation } from "react-i18next";
import fcodeImage from "src/assets/fcode.png";
import LoginTextField from "src/pages/Login/LoginTextField";
import LocalStorageUtils from "src/utils/LocalStorageUtils";

interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}
const Login = () => {
    const [redirectUrl, setRedirectUrl] = useState<string>("");
    const apiEndpoint = API_ROOT_URL;
    const redirectRouteAfterLogin = "/";
    const history = useHistory();
    const snackbar = useSnackbar();
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
                    history.push(redirectRouteAfterLogin);
                } else if (resultObject.data.code === 401) {
                    fetchLoginUri();
                    snackbar({ children: "Invalid credential!!", severity: "error" });
                }
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log("error", error);
            }
        },
        [apiEndpoint, history, fetchLoginUri, snackbar]
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

    const { t } = useTranslation(["login"]);
    return (
        <React.Fragment>
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
                    xs={12}
                    sm={6}
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                >
                    <BoxBase
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                        minWidth={300}
                        maxWidth={400}
                    >
                        <TypographyBase variant="h3" color="primary">
                            Sign in
                        </TypographyBase>
                        <BoxBase height={20} />
                        <LoginTextField
                            label={t("login:usernameOrEmail")}
                            margin="normal"
                            icon={<AccountCircle />}
                            fullWidth
                        />
                        <LoginTextField
                            label={t("login:password")}
                            margin="normal"
                            type="password"
                            icon={<LockRounded />}
                            fullWidth
                        />
                        <BoxBase height={20} />
                        <ButtonBase color="primary" variant="contained" fullWidth>
                            {t("login:login")}
                        </ButtonBase>

                        <ThematicBreak caption="or" width={70} height={40} />
                        <GoogleButton variant="outlined" onClick={startLogin} fullWidth>
                            {t("login:loginWithGoogle")}
                        </GoogleButton>
                    </BoxBase>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Login;
