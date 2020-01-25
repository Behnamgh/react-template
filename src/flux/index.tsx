
import React from "react";
import { UserStateProvider } from "./user/state";

export default (props: any) => {
    return (
        <UserStateProvider>
            {props.children}
        </UserStateProvider>
    );
};
