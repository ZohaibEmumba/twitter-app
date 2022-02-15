// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DsiplayTweet from "./components/displaytweet/DsiplayTweet";
import FixedHome from "./components/fixedhome/FixedHome";
import Login from "./components/login/Login";
import SideNavbar from "./components/sidebar/SideNavbar";
import Trends from "./components/trends/Trends";

const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;
