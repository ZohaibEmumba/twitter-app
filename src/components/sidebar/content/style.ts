import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
     input{
         border: none;
         padding: 15px 15px;
         background-color: white;
         text-align: left;
         font-weight: 500;
        &:hover{
            background-color: #e6ecf0;
            cursor: pointer;
        }
     }   
`