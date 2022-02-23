import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    grid-template-rows: auto;
    height: 100vh;       
`
export const Wrapper = styled.div`
     max-width: 666px; 
`
export const SideBarWrapper = styled.div`
    display: flex;
    justify-content: end; 
`
export const MiddleWrapper = styled.div`
    border-right: 1px solid #e6ecf0;
    max-width: 666px;
`
export const EndWrapper = styled.div`
    max-width: 400px; 
    margin: 20px;
`
