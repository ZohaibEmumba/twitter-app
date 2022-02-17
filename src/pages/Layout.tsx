import { Main, Section, SideBarWrapper, Wrapper } from "./style";
import CreateTweet from "../components/createtweet/CreateTweet";
import DsiplayTweet from "../components/displaytweet/DsiplayTweet";
import FixedHome from "../components/fixedhome/FixedHome";
import SearchBar from "../components/search/SearchBar";
import SideNavbar from "../components/sidebar/SideNavbar";
import Trends from "../components/trends/Trends";

const Layout = () => {
  return (
    <Section>
      <SideBarWrapper>
        <SideNavbar />
      </SideBarWrapper>
      <Main>
        <div>
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
          <div>
            <SearchBar />
            <Trends />
          </div>
        </div>
      </Main>
    </Section>
  );
};

export default Layout;
