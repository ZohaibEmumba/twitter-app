import styled from "styled-components";

export const MainSection = styled.section`
  position:fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  border-right: 1px solid #e6ecf0;
`
export const SideBar = styled.div`
 
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  ul li {
    width : 100%;
  }
  ul li a{  
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    padding: 18px 10px;
    font-size: 20px;
    transistion : 1s ease-in-out;
    
    &:hover {
      background: #f7f9f9;
      border-radius: 30px;
      width: 60%;
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
export const MainWrapper = styled.div` 
    width:  236px ;
    margin-bottom:  12px ;
    margin-top: 12px ;
    margin-right: 10px ;
    align-self: flex-end;
    transition: .1s ease-in-out;

    &:hover {
      background-color:rgba(15 , 20 , 25 , 0.1);
      cursor: pointer ;
      border-radius: 50px;
    }
`
export const Img = styled.img`
    border-radius: 50%;
    object-fit: cover;
`
export const NameWrapper = styled.div` 
    align-self: center ;
    margin-left: 10px ;
    margin-right: 10px ;
`
export const MarginWrapper= styled.div`
    margin-left: 12px ;
    marginRight: 12px ;
`
export const TextSpan= styled.span` 
    font-size: 13px;    
`
export const TextSpan1= styled.span` 
    font-size: 12px;
    color: gray;    
`
export const IconWrapper = styled.div`
    align-self: center;
    cursor: pointer;
    color: grey;
`
export const ProfileButton = styled.div`
    padding: 10px 10px;
    display: flex;
    border: 1px solid white;
    border-radius: 50px;
    flex-direction: row;
`

