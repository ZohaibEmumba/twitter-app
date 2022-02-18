import styled from "styled-components";

export const WholeWrapper = styled.div`
  display: flex ;
  flex-direction: column ;  
  border-right: 1px solid #e6ecf0;
  transition: .1s ease-in-out;
  &:hover{
    cursor: pointer;
    background-color: #e6ecf0;
  }
` 
export const PostSection = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e6ecf0;
  width: 94%;
`;
export const FirstPost = styled.div`
  display: flex;
  align-items: center;
  gap:20px
`;
export const PostImg = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const PostName = styled.div`
  margin-left: 6px;
  font-size: 18px;
  font-weight:500;
  .verify {
    margin-left: 3px;
    color: #1da1f2;
  }
`;
export const PostUserName = styled.div`
  margin-left: 6px;
  color: silver;
  font-weight: 300;

  span {
    display: inline-block;
    margin-left: 5px;
    font-size: 14px;
  }
`;
export const PostDetails = styled.div`
  margin: 8px 73px;
  overflow: hidden;
`;

export const PostImgDetails = styled.div`
  width: 100%;
  margin-top: 6px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
export const PostReactions = styled.div`
  display: flex;
  margin: 8px 0;
  justify-content: space-between;
  align-items: center;
  color: silver;
  .re{
    cursor: pointer;
  }
`;
