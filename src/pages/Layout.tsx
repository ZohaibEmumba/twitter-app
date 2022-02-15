import React from "react";
import DsiplayTweet from "../components/displaytweet/DsiplayTweet";
import FixedHome from "../components/fixedhome/FixedHome";
import SideNavbar from "../components/sidebar/SideNavbar";
import { Section } from "./style";

const Layout = () => {
  return (
    <Section>
      <div>
        <SideNavbar />
      </div>
      <div>
        <div style={{width:'50%'}}>
        <FixedHome />
        <DsiplayTweet />
        </div>
      </div>
    </Section>
  );
};

export default Layout;
