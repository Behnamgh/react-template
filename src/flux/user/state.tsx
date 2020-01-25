import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import actions from "./action";
import { IUserActions, IUserVariable } from "./type";

export const UserStateContext = createContext<IUserVariable | IUserActions | null>(null);

export const UserStateProvider = (props: { children: React.ReactElement }) => {
    const initialState: IUserVariable = {
        role: "",
        user: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserStateContext.Provider
            value={Object.assign({}, state, actions(state, dispatch))}
        >
            {props.children}
        </UserStateContext.Provider>
    );
};

export const useUserStateValue = () => useContext(UserStateContext);