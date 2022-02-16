import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex ;
  flex-direction: column;
`
export const CreateSection = styled.section`
  padding-top: 70px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
`;
export const Createfirst = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 5px;
  padding: 0 15px;
`;
export const Createimg = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  align-self: baseline;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Createinput = styled.div`
  padding-right:40px;
  input{
      width:500px;
      border: none;
      outline: none;
      text-align:left;
      font-size: 22px;
      color: grey;
      margin-top: 18px;
      
  }
`;
export const Createsecond = styled.div`
  display: flex;
  justify-content : space-between;
`;
export const Createicons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span{
    border-radius : 50% ; 
    padding: 5px ;
    transition: .1s ease-in-out;
    &:hover{
      background-color: rgba(29, 155 , 240 , 0.1);
      border-radius:50%;
      cursor: pointer;
    }
  }
  .ic {
    margin: 0 12px;
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
    width: 100% ; 
    opacity: .20;
    margin-bottom: 15px;
    margin-left: 5px;
    margin-top: 30px
`