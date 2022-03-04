import { createContext } from "react";
import { SHOWTREND } from "../constants";
import { Action, Dispatch } from "../types";

export const initialState: any = {
    username: "@zohaib007",
    trending: false,
    name: "",
    homePosts: [],
    trendingPostData: [{
        id: 1,
        country: "Trending in Pakistan",
        keyword: "ISPR",
        totalKeywords: "2000k",
    },
    {
        id: 2,
        country: "Trending in Pakistan",
        keyword: "IMRANKHAN",
        totalKeywords: "6000k",
    },
    {
        id: 3,
        country: "Trending in Pakistan",
        keyword: "YoutubeinPakistan",
        totalKeywords: "2560k",
    },]
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