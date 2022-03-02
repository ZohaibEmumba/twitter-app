import { useContext } from "react";
import CreateTweet from "../../components/createtweet/CreateTweet";
import DisplayTweet from "../../components/displaytweet/DisplayTweet";
import FixedHome from "../../components/fixedhome/FixedHome";
import SearchBar from "../../components/search/SearchBar";
import SideNavbar from "../../components/sidebar/SideNavbar";
import TrendingDisplayTweet from "../../components/trends/trending-display-post/TrendingDisplayPost";
import Trends from "../../components/trends/Trends";
import { TwitterContext } from "../../context/TwitterContext";
import { EndWrapper, MiddleWrapper, Section, SideBarWrapper } from "./style";

const Layout = () => {
  const { state } = useContext(TwitterContext);
  const { trending } = state;

  console.log(state);
  return (
    <Section>
      <SideBarWrapper>
        <SideNavbar />
      </SideBarWrapper>

      <MiddleWrapper>
        {trending ? (
          <div style={{ marginTop: "70px" }}>
            <FixedHome />
            <TrendingDisplayTweet />
          </div>
        ) : (
          <div>
            <FixedHome />
            <CreateTweet />
            <DisplayTweet />
          </div>
        )}
      </MiddleWrapper>

      <EndWrapper>
        <SearchBar />
        <Trends />
      </EndWrapper>
    </Section>
  );
};

export default Layout;
