import styled from "styled-components";

export const NotificationWrapper = styled.section`
    display: flex;
    flex-direction: row;
    gap:20px;
    align-items: center;
    padding: 20px;
    .text{
        font-weight: 500;
    }
    .time{
        color: #1d9bf0;
    }
    &:hover{
        background-color: #f5f8fa;
        cursor: pointer;
    }
`

export const Img = styled.img`
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 50%;
`
