import styled from "styled-components";

// export const SerarchSection = styled.section`
//     position: fixed;
//     display: flex;
//     flex-direction: column;
//     gap: 50px;   
//     width: 400px;
//     top: 2%;
//     left: 67%;

//     @media (max-width: 1000px) {
//     display: none;
//   }

// `;
export const Search = styled.div`
   position: fixed;

  .trend__control {
    border: none;
    outline: none;
    background: #eff3f4;
    border-radius: 50px;
    padding: 15px 46px;
    width: 400px;
  }
  @media (max-width: 1000px) {
     display: none;
   }
`;
export const SearchIcon = styled.div`
    position: absolute;
    top: 15px;
    left: 40px;
`;
