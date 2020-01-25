export default class Auth {
    public static storageTokenKey = "token";
    public static storageUserKey = "user";

    public static signIn = (token: string, userData: object) => {
        localStorage.setItem(Auth.storageTokenKey, token);
        localStorage.setItem(Auth.storageUserKey, JSON.stringify(userData));
    }

    public static getToken = () => {
        return localStorage.getItem(Auth.storageTokenKey);
    }

    public static getUserData = () => {
        try {
            return JSON.parse(localStorage.getItem(Auth.storageUserKey) || "{}");
        } catch (e) {
            return {};
        }
    }

    public static isLogged = () => {
        return !!localStorage.getItem(Auth.storageTokenKey);
    }

    public static signOut = () => {
        localStorage.removeItem(Auth.storageTokenKey);
        localStorage.removeItem(Auth.storageUserKey);
    }
}