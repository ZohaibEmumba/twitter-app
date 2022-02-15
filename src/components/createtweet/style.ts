import styled from "styled-components";

export const CreateSection = styled.section`
  padding-top: 80px;
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 30px;
`;
export const Createfirst = styled.section`
  display: flex;
  padding: 0 20px;
  align-items: center;
`;
export const Createimg = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Createinput = styled.div`
  margin-left: 20px;

  .create__control{
     
      border: none;
      outline: none;
    
  }
`;
export const Createsecond = styled.div`
  margin-left: 20px;
  margin-top: 15px;
  display: flex;
`;
export const Createicons = styled.div`
  width: 30%;
  margin-left: 70px;

  .ic {
    margin: 0 6px;
    font-size: 20px;
    cursor: pointer;
    color: #1da1f2;
  }
`;
export const Createbtn = styled.div`
  width: 50%;
  text-align: right;
  margin-right: 20px;
  a {
    text-decoration: none;
    background: #1da1f2;
    color: #fff;
    border-radius: 50px;
    outline: none;
    padding: 10px 20px;
  }
`;

export const HR = styled.hr` 
    width: 80% ; 
    opacity: .20;
    margin-bottom: 35px;
`