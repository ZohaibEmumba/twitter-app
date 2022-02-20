import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const Key = styled.div`
  background: #f5f8fa;
  border-radius: 20px;
  font-weight: 700;
  width: 400px;
`;
export const TrendWrapper = styled.div`
  margin-bottom: 5px;
  padding: 20px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    cursor: pointer;
  }
`;
export const KeywordHeading = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
  padding-top: 16px;
  padding-left: 20px;
`;
export const CountryHeading = styled.div`
  font-size: 14px;
  color: silver;
  font-weight: 200;
  margin: 10px 0;
`;
export const KeywordName = styled.div`
  margin-bottom: 8px;
`;
export const KeywordTweets = styled.div`
  margin-top: 7px;
  color: silver;
  font-size: 14px;
  font-weight: 300;
`;
export const ShowMore = styled.div`
  padding:20px ;
  cursor: pointer ; 
  span{
    font-weight: 200;
    color: #1ca0f1 ;
  }
  &:hover{
    background-color : rgba(0 , 0 , 0 , 0.03);
    border-radius: 5px;
  }
`
