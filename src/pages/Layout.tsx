import CreateTweet from "../components/createtweet/CreateTweet";
import DsiplayTweet from "../components/displaytweet/DsiplayTweet";
import FixedHome from "../components/fixedhome/FixedHome";
import SearchBar from "../components/search/SearchBar";
import SideNavbar from "../components/sidebar/SideNavbar";
import Trends from "../components/trends/Trends";
import { Section } from "./style";

const Layout = () => {
  return (
    <Section>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <SideNavbar />
      </div>
      <div>
        <div style={{ width: "50%" }}>
          <FixedHome />
          <CreateTweet />
          <DsiplayTweet />
          <DsiplayTweet />
          <DsiplayTweet />
          <DsiplayTweet />
          <DsiplayTweet />
          <DsiplayTweet />
        </div>
      </div>
      <div>
        <SearchBar />
        <Trends />
      </div>
    </Section>
  );
};

export default Layout;
