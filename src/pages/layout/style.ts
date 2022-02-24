import styled from "styled-components";

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  grid-template-areas: "nav main aside";
  @media(max-width: 576px){
    grid-template-columns: 15% repeat(2, 1fr);
  }
`;

export const SideBarWrapper = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: flex-end;
`;
export const MiddleWrapper = styled.div`
  border-right: 1px solid #e6ecf0;
  grid-area: main;
`;
export const EndWrapper = styled.div`
  max-width: 400px;
  grid-area: aside;
  padding: 15px 15px;
`;
