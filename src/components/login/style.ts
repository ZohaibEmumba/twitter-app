import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex:1 1 auto; 
    height: 95vh;
    font-family: 'Roboto', sans-serif;
`
export const ImgWrapper = styled.div` 
    img{
        height:100%;
        width:100%;
        object-fit: fill;
    }
`
export const FormWrapper = styled.div`
    padding: 20px 5px;
    display: flex;
    flex-direction:column;
`
export const Section = styled.section`
    display: flex;
    flex-direction:column;
    color: black;
    padding: 10px 40px;
`
export const LinkWrapper = styled.div`
    ul{
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 12px;
        column-gap: 25px;
        justify-content: center;
    }
`