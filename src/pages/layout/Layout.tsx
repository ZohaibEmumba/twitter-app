import CreateTweet from "../../components/createtweet/CreateTweet";
import DsiplayTweet from "../../components/displaytweet/DsiplayTweet";
import FixedHome from "../../components/fixedhome/FixedHome";
import SideNavbar from "../../components/sidebar/SideNavbar";
import Trends from "../../components/trends/Trends";
import {  EndWrapper, MiddleWrapper, Section, SideBarWrapper, Wrapper } from "./style";

const Layout = () => {
  return (
    <Section>
            <SideBarWrapper>
              <SideNavbar />
            </SideBarWrapper>
      
            <MiddleWrapper>
              <Wrapper>
                <FixedHome />
                <CreateTweet />
                <DsiplayTweet />
                <DsiplayTweet />
                <DsiplayTweet />
                <DsiplayTweet />
                <DsiplayTweet />
                <DsiplayTweet />
                <DsiplayTweet />
              </Wrapper>
            </MiddleWrapper>

            <EndWrapper>
              <Trends />
            </EndWrapper>
            
    </Section>
  );
};

export default Layout;
