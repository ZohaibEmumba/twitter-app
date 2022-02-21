import styled from "styled-components";

export const Button = styled.button`
   border-radius:25px;
   font-size: 15px;
   letter-spacing: 1px;
   text-decoration: none;
   cursor: pointer;
   border: none;
 
   &.loginBtn {border-radius: 30px;
    padding: 10px 20px;
    margin-bottom: 5px;
    background-color: rgb(29, 155, 240);
    color: white ;
    font-weight: 600 ;
    &:hover{
        background-color: rgb(26 , 140 , 216);
    }
   }

   &.signinBtn {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0);
    color: #1ca0f1 ;
    font-weight: 600 ;
    border: 1px solid #1ca0f1;
    &:hover{
        background-color: rgba(29 , 155 , 240 , 0.1);
    }
   }

   &.tweetBtn{
    background-color: rgb(29, 155, 240);
    color: white ;
    font-weight: 500 ;
    padding: 15px 90px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &:hover{
        background-color: rgb(26 , 140 , 216);
    }
   }

   &.createTweet{
    padding: 7px 20px;
    background-color: rgb(29, 155, 240);
    color: white ;
   }

   &.nextBtn{
       padding: 10px 200px;
       margin-top: 50px;
       color: white;
       background-color:#878a8c ;
       border: none;
   }

   &.logout{
       background-color: rgb(15 , 20 , 25);
       color:#fff;
       padding: 10px 200px;
       margin-top:20px;
       border:none;

       &:hover{
        background-color: rgb(39 , 44 , 48);
       }
   }
   &.cancel{
        background-color:rgba(0, 0, 0, 0);
        color:black;
        padding: 10px 200px;
        border:1px solid black;
        font-weight: 600;
        &:hover{
            background-color: rgba(15 , 20 , 25 , 0.1);
           }
   }
   
   &.none{
       border: none;
       background-color: transparent;
       font-size: 20px;
   }
`;