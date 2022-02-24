import styled from "styled-components";

export const MainSection = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  border-right: 1px solid #e6ecf0;
  
`;
export const SideBar = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: end;
    
    @media (max-height: 667px) {
        max-height: 333px;
        overflow-y: scroll;
    } 

    @media (max-height: 500px) {
        max-height: 200px;
        overflow-y: scroll

    } 
  }
  ul li {
    width: 100%;
    &.tweet-circle-btn{
      display: none;
      width: 75%;
      margin-right: 15px;
    @media (max-width : 1100px){
      display: inline-block;
      padding: 10px 10px;
      background-color: #1da1f2 ;
      border-radius: 50%;
      text-align: center;
      color: white;
    }
  }

  }

  
  ul li .navItem {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    padding: 15px 10px;
    font-size: 20px;

    &:hover {
      background: #f7f9f9;
      border-radius: 30px;
    }

    @media (max-height: 800px) {
        padding: 10px 10px;
    } 

  }
  ul li .twitter-logo {
    display: flex;
    align-items: center;
    padding: 12px 12px;
    &:hover {
      background: #f7f9f9;
      border-radius: 30px;
      width: 20%;
    }
  }
  ul li span {
    @media (max-width: 1300px) {
      display: none;
    }
  }

  .active {
    font-weight: 700;
  }
  .icons {
    margin-right: 15px;
    font-size: 25px;
  }
  .logo {
    color: #1da1f2;
    margin: 0;
  }
`;

export const SidebarBtn = styled.div`
  margin: 20px 40px;
  @media (max-width: 1300px) {
    display: none;
  }
`;
export const MainWrapper = styled.div`
  width: 236px;
  margin-bottom: 12px;
  margin-top: 12px;
  margin-right: 10px;
  align-self: flex-end;
  transition: 0.1s ease-in-out;

  @media (max-width: 1100px) {
    width: 60px;
  }
  &:hover {
    background-color: rgba(15, 20, 25, 0.2);
    cursor: pointer;
    border-radius: 50px;
  }
`;
export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;
export const NameWrapper = styled.div`
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 1300px) {
    display: none;
  }
`;
export const MarginWrapper = styled.div`
  margin-left: 12px;
  margin-right: 12px;
`;
export const TextSpan = styled.span`
  font-size: 13px;
`;
export const TextSpan1 = styled.span`
  font-size: 12px;
  color: gray;
`;
export const IconWrapper = styled.div`
  align-self: center;
  cursor: pointer;
  color: grey;
  @media (max-width: 1300px) {
    display: none;
  }
`;
export const ProfileButton = styled.div`
  padding: 10px 10px;
  display: flex;
  border: 1px solid white;
  border-radius: 50px;
  flex-direction: row;
`;
