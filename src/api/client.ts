import Auth from "../util/auth";
import HttpClient from "../util/http-client";

export const getUrl = (path: string): string => {
    return `${path}`;
};

export interface IResponse<T = object> {
    errors?: { code: number, description: string }[];
    isSuccess: boolean;
    data?: T;
}

export const getHttpClient = () => (new HttpClient({
    baseURL: "http://google.com/",
    headers: { "authorization": Auth.getToken(),"auth": Auth.getToken() }
}));
