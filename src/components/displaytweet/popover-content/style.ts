import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction:column;
    gap: 15px;
    width:250px;

    div:nth-child(1) {
        display: flex;
        justify-content: space-between;
    }
    div:nth-child(2) {
        display: flex;
        flex-direction:column;
        span:nth-child(1){
            font-size:15px;
            font-weight: 600;
        }
    }
    .follower-sect {
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        
        span{
            font-size:15px;
            font-weight:600;
        }
    }
    .logo-img{
        width: 60px;
        height : 60px;
        object-fit: cover ;
        border-radius:50%;
        cursor: pointer;
    }
`