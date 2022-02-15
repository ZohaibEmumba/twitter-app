import styled from "styled-components";

// background-color: ;
// rgb(26, 140, 216)
export const Button = styled.button`
    border-radius: 30px;
    font-size: 14px;
    
    letter-spacing: 1px;
    text-decoration: none;
    cursor: pointer;
    height:45px;

    background-color:${props => props.theme.bgcolor};
    color: ${props => props.theme.textcolor};
    font-weight: ${props => props.theme.fontwght};
    border: ${props => props.theme.border};

    


`;

// &:hover{
//     color : ${props => props}
// }