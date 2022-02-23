import CreateTweet from "../../components/createtweet/CreateTweet";
import DsiplayTweet from "../../components/displaytweet/DsiplayTweet";
import FixedHome from "../../components/fixedhome/FixedHome";
import SearchBar from "../../components/search/SearchBar";
import SideNavbar from "../../components/sidebar/SideNavbar";
import Trends from "../../components/trends/Trends";
import {
  EndWrapper,
  MiddleWrapper,
  Section,
  SideBarWrapper,
  
} from "./style";

const Layout = () => {
  return (
    <Section>
      <SideBarWrapper>
        <SideNavbar /> 
      </SideBarWrapper>

      <MiddleWrapper>
         <FixedHome />
          <CreateTweet />
          <DsiplayTweet />
          <DsiplayTweet />
          <DsiplayTweet />
          <DsiplayTweet />
          <DsiplayTweet />
          <DsiplayTweet />
          <DsiplayTweet /> 
      </MiddleWrapper>

      <EndWrapper>
        <SearchBar />
        <Trends />
      </EndWrapper>
    </Section>
  );
};

export default Layout;
