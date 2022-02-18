import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  height: 95vh;
  font-family: "Roboto", sans-serif;
  @media (max-width: 576px) {
    height: 86vh;
  }
`;
export const ImgWrapper = styled.div`
  position: relative;
  @media (max-width: 1100px) {
    display: none;
  }
  .bg-image {
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .twitter-logo {
    position: absolute;
    top: 300px;
    left: 350px;

    @media (max-width: 1500px) {
      top: 300px;
      left: 320px;
      width: 250px;
      height: 250px;
    }
    @media (max-width: 1100px) {
      top: 300px;
      left: 200px;
      width: 220px;
      height: 220px;
    }
  }
`;
export const FormSection = styled.section`
  padding: 16px;
  width: 45vw;
  display: flex;
  @media (max-width: 1100px) {
    width: 100vw;
  }
`;
export const FormWrapper = styled.div`
  padding: 20px 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 5px 17px;
  &.belowSect {
    margin-top: 40px;
  }
  &.emptydiv {
    height: 30px;
  }
`;
export const LinkWrapper = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 12px;
    column-gap: 25px;
    padding: 12px;
    justify-content: center;

    li {
      &:hover {
        border-bottom: 1px solid grey;
        cursor: pointer;
      }
    }
  }
`;
export const Span = styled.span`
  &.title {
    font-size: 70px;
    font-weight: 500;
    overflow-wrap: break-word;
    margin-bottom: 30px;
    margin-top: 48px;
    @media (max-width: 1100px) {
      font-size: 50px;
    }
    @media (max-width: 1100px) {
      font-size: 40px;
    }
  }
  &.sub-heading {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 32px;
    @media (max-width: 1100px) {
      font-size: 25px;
    }
  }
`;
export const PrivacyText = styled.div`
  font-size: 11px;
  a {
    text-decoration: none;
    color: rgb(29, 155, 240);

    &:hover {
      border-bottom: 1px solid rgb(29, 155, 240);
    }
  }
`;

export const ButtonDivWrapper = styled.div`
  width: 350px;
`;
