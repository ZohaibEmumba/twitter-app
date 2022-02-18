import {  EndWrapper, MiddleWrapper, Section, SideBarWrapper, Wrapper } from "./style";
import CreateTweet from "../../components/createtweet/CreateTweet";
import DsiplayTweet from "../../components/displaytweet/DsiplayTweet";
import FixedHome from "../../components/fixedhome/FixedHome";
import SideNavbar from "../../components/sidebar/SideNavbar";
import Trends from "../../components/trends/Trends";

const Layout = () => {
  return (
    <Section>
      <SideBarWrapper>
        <SideNavbar />
      </SideBarWrapper>
      
      {/* <Main> */}
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
            {/* <SearchBar /> */}
            <Trends />
          </EndWrapper>
        
      {/* </Main> */}
    </Section>
  );
};

export default Layout;
