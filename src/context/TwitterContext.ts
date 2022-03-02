import { createContext } from "react";
import { SHOWTREND } from "../constants";
import { Action, Dispatch } from "../types";

export const initialState: any = {
    trending: false,
    name: ""
};

export const TwitterContext = createContext<{
    state: any,
    dispatch: Dispatch,
}>({
    state: initialState,
    dispatch: () => undefined
});

export const Reducer = (state = initialState, action: Action): any => {
    const { type, payload } = action;
    switch (type) {
        case SHOWTREND:
            return {
                ...state,
                trending: payload.trending,
                name: payload.name
            };
        default:
            return state;
    }

};