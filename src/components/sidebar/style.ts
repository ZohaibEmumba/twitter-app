import styled from "styled-components";

export const MainSection=styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

`
export const SideBar = styled.div`
  /* width: 25%;
  position: fixed;
  left: 0;
  height: 100%; */
  border-right: 1px solid #e6ecf0;
  
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  ul li {
    width : 50%;
  }
  ul li a{  
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    padding: 18px 35px;
    font-size: 20px;
    transistion : 1s ease-in-out;

    &:hover {
      background: #f7f9f9;
      border-radius: 30px;
      width: 40%;
    }
  } 
  .active{
    font-weight : 700;
  }
  .icons {
    margin-right: 15px;
    font-size: 25px;
  }
  .logo{
    color: #1da1f2;
  }
  
`;

export const SidebarBtn = styled.div` 
    margin: 20px 20px;
  a {
    text-decoration: none;
    background: #1da1f2;
    color: #fff;
    padding: 18px 35px;
    margin: 0 35px;
    border-radius: 50px;
    outline: none;
    display: block;
    text-align: center;
   
    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
  }
`
export const ProfileButton= styled.div`
  padding: 10px 10px;
  display: flex;
  border: 1px solid white;
  border-radius: 50px;
  flex-direction: row;
`

