import { useCallback, useEffect, useState } from "react";

import { API_ROOT_URL } from "src/configuration";

import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";

interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}
const Login = () => {
    const [redirectUrl, setRedirectUrl] = useState<string>("");
    const apiEndpoint = API_ROOT_URL;
    const redirectRouteAfterLogin = "/";

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
                console.log("fetchToken", resultObject.data);
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
        <BoxBase>
            <ButtonBase variant="contained" color="primary">
                You are unauthorized
            </ButtonBase>
            <ButtonBase color="secondary" variant="contained" onClick={startLogin}>
                Login With Google
            </ButtonBase>
        </BoxBase>
    );
};

export default Login;
