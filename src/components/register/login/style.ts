import { Row } from "antd";
import styled from "styled-components";

export const Heading = styled.span`
    font-size: 20px;
`
export const LinkButton = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
    color: #1ca0f1;
    span{
    &:hover{
      border-bottom: 1px solid #1ca0f1;
      }
    }
`
export const RowStyle = styled(Row)`
  &.padding-row{
    padding-bottom:30px;
    display: flex;
    justify-content: center;
  }
` 