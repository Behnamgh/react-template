import { IResponse, getHttpClient } from "./client";

export default class UserApi {
    public static async signIn(username: string, password: string): Promise<IResponse<any>> {
        const url = "user/login";
        let ret;
        try {
            ret = await getHttpClient().post(url, { username, password });
        } catch (e) {
            const isAuthError = (e && e.response && e.response.status === 401);
            const resp = e.response.data;

            return {
                ...resp,
                errors: [
                    ...(resp.errors || []),
                    ...(isAuthError && !resp.errors ? [{ code: 401, description: "نام کاربری و یا رمز عبور شما اشتباه است" }] : [])
                ]
            };
        }
        return {
            ...(ret.data || { isSuccess: false })
        };
    }
}