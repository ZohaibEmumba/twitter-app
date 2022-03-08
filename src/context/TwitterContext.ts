import { createContext } from "react";
import { GETALLUSERS, GETSPECIFICUSERS, SHOWTREND } from "../constants";
import { Action, Dispatch } from "../types";

export const initialState: any = {
    loginuser:{},
    trending: false,
    name: "",
    homePosts: [],
    allUsers: [],
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
    }]
};

export const TwitterContext = createContext<{
    state: any,
    dispatch: Dispatch,
}>({
    state: initialState,
    dispatch: () => undefined
});

export const Reducer = (state = initialState, action: Action): any => {
    const { type} = action;
    switch (type) {
        case SHOWTREND:
            return {
                ...state,
                trending: action.payload.trending,
                name: action.payload.name
            };
        case GETALLUSERS:
            return{
                ...state,
                allUsers: action.payload.allUsers
            }
        case GETSPECIFICUSERS:
            return{
                ...state,
                loginuser:action.payload.loginuser
            }    
        default:
            return state;
    }

};