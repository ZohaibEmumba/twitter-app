import styled from "styled-components";

export const Wrapper = styled.section`
    width: 540px;
    margin: 100px auto;
    background-color: green;
    padding: 16px;
    display: flex;
    flex-direction: row;
    column-gap: 15px;

    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    div:nth-child(2) {
        input{
            width: 415px ;
            border: none ;
            padding: 20px ;
        }
        .border-div{
            border: .3px solid lightblue;
        }
    }

`