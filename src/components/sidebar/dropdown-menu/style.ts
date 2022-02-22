import { Menu } from "antd";
import styled from "styled-components";

export const MenuWrapper = styled(Menu)`
    .padding{
        width: 250px;
        padding : 15px;
    }
    .link-padding{
        display: flex ;
        flex-direction: row ;
        gap:10px;
        align-content:center;
    }
    .icon{
        align-self: center ;
    }
`