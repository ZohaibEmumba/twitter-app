import { createContext } from "react";
import { SHOW_MODAL } from "../constants";
import { Action, Dispatch } from "../types";

export const initialState: any = {
    isvisible: false,
};

export const TwitterContext = createContext<{
    state: any,
    dispatch: Dispatch,
}>({
    state: initialState,
    dispatch: () => undefined
});

export const Reducer = (state = initialState, action: Action): any => {
    const { type , payload } = action;
    switch (type) {
        case SHOW_MODAL:
            return { ...state, isvisible: payload };
        default:
            return state;
    }
};