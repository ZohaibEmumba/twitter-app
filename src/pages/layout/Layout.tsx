import CreateTweet from "../../components/createtweet/CreateTweet";
import DisplayTweet from "../../components/displaytweet/DisplayTweet";
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
          <DisplayTweet />
      </MiddleWrapper>

      <EndWrapper>
        <SearchBar />
        <Trends />
      </EndWrapper>
    </Section>
  );
};

export default Layout;
