import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top:7%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const Key = styled.div`
  background: #eff3f4;
  border-radius: 20px;
  font-weight: 700;
  width: 400px;
`;
export const TrendWrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 20px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    cursor: pointer;
  }
  div:nth-child(2){
    span{
      &:hover{
        color: #1ca0f1;
      }
    }
  }
`;
export const KeywordHeading = styled.div`
  display:flex;
  justify-content: space-between;
  margin-right: 25px;
  font-size: 20px;
  padding-bottom: 10px;
  padding-top: 16px;
  padding-left: 20px;

  .setting-icon{
    font-size:20px;
    &:hover{
      cursor:pointer;
      color:grey;
      border-radius: 50%;
    }
  }

`;
export const CountryHeading = styled.div`
  font-size: 14px;
  color: silver;
  font-weight: 200;
`;
export const KeywordName = styled.div`
  
`;
export const KeywordTweets = styled.div`
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
