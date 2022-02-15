import React from 'react'
import { CountryHeading, Key, KeywordHeading, KeywordName, KeywordTweets, TrendWrapper, Wrapper } from './style';

const Trends = () => {
    const [state, setState] = React.useState([
        {
            id: 1,
            country: "Trend in Pakistan",
            keyword: "ISPR",
            totalKeywords: "2000k",
        },
        {
            id: 2,
            country: "Trend in Pakistan",
            keyword: "IMRANKAHN",
            totalKeywords: "6000k",
        },
        {
            id: 3,
            country: "Trend in Pakistan",
            keyword: "YoutubeinPakistan",
            totalKeywords: "2560k",
        },
    ]);
    return (
        <Wrapper>
        <div className="keywords">
            <Key>
                <KeywordHeading>
                    <span>Trends for you</span>
                </KeywordHeading>
                {state.map((keyword) => (
                    <TrendWrapper key={keyword.id}>
                        <CountryHeading>{keyword.country}</CountryHeading>
                        <KeywordName>
                            <strong>{keyword.keyword}</strong>
                        </KeywordName>
                        <KeywordTweets>{keyword.totalKeywords}</KeywordTweets>
                    </TrendWrapper>
                ))}
            </Key>
        </div>
        </Wrapper>
    );
};

export default Trends