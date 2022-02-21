import styled from "styled-components";

export const Wrapper = styled.section`
    display:flex;
    flex-direction: column;
    gap:15px;

    .title{
        font-size: 15px;
        font-weight: 600;
    }
    .main-div{
        display: flex;
        flex-direction: column;
        gap:15px;
        div:nth-child(2){
            color:grey;
            font-size:12px;
        }
    }
    .innner-div{
        display: flex;
        flex-direrction: column;
        justify-content: space-between;

        span:nth-child(1){
            font-size:15px;
            font-weight: 500;
        }
    }
`