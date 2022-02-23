import styled from "styled-components";

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(3 , 1fr);
  /* margin: auto 10%; */
  height: 100vh;
  grid-template-areas: "nav  main aside";
`;

export const SideBarWrapper = styled.div`
    grid-area: nav;
    display: flex;
    justify-content: flex-end;
`;
export const MiddleWrapper = styled.div`
    border-right: 1px solid #e6ecf0;
    grid-area: main;
 
  /* max-width: 666px;  */
`;
export const EndWrapper = styled.div`

   max-width: 400px; 
    /* margin: 20px;  */
    grid-area: aside;
    padding: 15px 15px;
    
  
`;
