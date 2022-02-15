import React from "react";
import DsiplayTweet from "../components/displaytweet/DsiplayTweet";
import FixedHome from "../components/fixedhome/FixedHome";
import SideNavbar from "../components/sidebar/SideNavbar";
import { Section } from "./style";

const Layout = () => {
  return (
    
    // 
    //   <div>
    //     <FixedHome />
    //     <DsiplayTweet />
    //   </div>

    <Section>
        <div>
            <SideNavbar />
        </div>
        <div style={{ backgroundColor:"yellowgreen"}}>
                
        </div>
    </Section>
    
  );
};

export default Layout;
