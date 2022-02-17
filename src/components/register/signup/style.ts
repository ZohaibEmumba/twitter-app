import styled from "styled-components";

export const Heading = styled.span`
    font-size: 15px;
`
export const LinkButton = styled.button`
    padding: 0;
    background-color: white;
    border: none;
    cursor: pointer;
    color:#1ca0f1;
    span{
    &:hover{
      border-bottom: 1px solid #1ca0f1;
    }
    }
`