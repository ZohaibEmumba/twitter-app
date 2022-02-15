import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    // flex:1 1 auto; 
    height: 95vh;
    font-family: 'Roboto', sans-serif;
    .twitter-logo{
        position : absolute;
        top:300px;
        left:350px;
    }
`
export const ImgWrapper = styled.div` 
    img{
        height:100%;
        width:100%;
        object-fit: fill;
    }
`
export const FormSection = styled.section`
    padding: 16px ;
    width: 60vw; 
    display: flex;
`
export const FormWrapper = styled.div`
    padding: 20px 5px;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
`
export const Section = styled.section`
    display: flex;
    flex-direction:column;
    color: black;
    padding: 5px 17px;
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
export const Span = styled.span`
    &.title{
        font-size:70px;
        font-weight: 500;
        overflow-wrap: break-word;
        margin-bottom: 48px;
        margin-top: 48px;

    }
    &.sub-heading{
        font-size:30px;
        font-weight: 500;
        margin-bottom: 32px;
    }
`
export const PrivacyText = styled.div`
    font-size: 11px;
    a{
        text-decoration: none;
        color: rgb(29, 155, 240);

        &:hover{
            border-bottom : 1px solid  rgb(29, 155, 240);
        }
    }
`