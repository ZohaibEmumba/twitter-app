import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 18%;
  top: 80px;
  right: 290px;
`;
export const Key = styled.div`
  background: #f5f8fa;
  border-radius: 5px;
  font-weight: 700;
`;
export const TrendWrapper = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    cursor: pointer;
  }
`;
export const KeywordHeading = styled.div`
  font-size: 20px;
  padding-bottom: 10px;

  padding-top: 16px;
  padding-left: 10px;
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
