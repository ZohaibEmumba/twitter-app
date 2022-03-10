import { createSlice } from "@reduxjs/toolkit";

export const twitterSlice = createSlice({
    name: "twitter",
    initialState: {
        loginuser: {},
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
    }
    ,
    reducers: {
        getallusers: (state, action) => {
            state.allUsers = action.payload
        },
        getspecificuser: (state, action) => {
            state.loginuser = action.payload
        },
        showtrend: (state , action) => {
            state.trending = action.payload.trending ;
            state.name = action.payload.name ;

        }
    }
})

export const { getallusers, getspecificuser ,showtrend } = twitterSlice.actions;
export default twitterSlice.reducer