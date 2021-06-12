import jwt_decode from "jwt-decode";

const LOCALSTORAGE_TOKEN_NAME = "token";

export interface User {
    userId: string;
    email: string;
    name: string;
    role: "author" | string;
}

class LocalStorageUtils {
    getItem(key: string) {
        if (typeof localStorage !== "undefined") {
            let item = localStorage.getItem(key);
            if (!item) {
                this.setItem(key);
                return localStorage.getItem(key);
            }
            return JSON.parse(item || "{}");
        }
        return undefined;
    }

    setItem(key: string, value = "") {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    removeItem(key: string) {
        if (typeof localStorage !== "undefined") {
            localStorage.removeItem(key);
        }
    }

    clear() {
        if (typeof localStorage !== "undefined") {
            localStorage.clear();
        }
    }

    getUser(): User | undefined {
        if (typeof localStorage !== "undefined") {
            const token = this.getItem(LOCALSTORAGE_TOKEN_NAME);
            try {
                if (token) return jwt_decode(token);
                else return token;
            } catch (error) {
                return token;
            }
        }
        return undefined;
    }

    setUser(token: string) {
        if (typeof localStorage !== "undefined") {
            this.setItem(LOCALSTORAGE_TOKEN_NAME, token);
            this.setItem("user", JSON.stringify(jwt_decode(token)));
        }
        return undefined;
    }
    getToken() {
        return this.getItem(LOCALSTORAGE_TOKEN_NAME);
    }
}

export default new LocalStorageUtils();
